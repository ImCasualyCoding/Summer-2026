
'''Brandon Valencia Assignment 2 6/3/26'''
################ Parent class of any credit card ##############################

class CreditCard:
    '''A consumer credit card.'''

    def __init__(self, customer, bank, acnt, limit, balance=0):
      
        self._customer = customer 
        self._bank = bank
        self._account = acnt
        self._limit = limit
        
        # Initialize the balance using the nonpublic setter method
        self._set_balance(balance)

    def _set_balance(self, b):
        self._balance = b

    def get_customer(self):
        '''Return name of the customer.'''
        return self._customer

    def get_bank(self):
        '''Return the bank's name.'''
        return self._bank

    def get_account(self):
        '''Return the card identifying number (typically stored as a string).'''
        return self._account

    def get_limit(self):
        '''Return current credit limit.'''
        return self._limit

    def get_balance(self):
        '''Return current balance.'''
        return self._balance
    
    def set_limit(self, limit):
        self._limit = limit
        
    def charge(self, purchase):
        '''Charge given price to the card, assuming sufficient credit limit.'''
        # Ensure the caller sends a number
        if not isinstance(purchase, (int, float)):
            raise TypeError("Purchase amount must be a number.")
        if purchase < 0:
            raise ValueError("Purchase amount cannot be negative.")

        if (purchase + self.get_balance()) <= self._limit:
            # Use the protected method instead of accessing self._balance directly
            self._set_balance(self.get_balance() + purchase)
            return True    
        else:
            return False   
        
    def make_payment(self, payment):
        '''Process customer payment that reduces balance.'''
        # Ensure the caller sends a number
        if not isinstance(payment, (int, float)):
            raise TypeError("Payment amount must be a number.")
        
        # Raise ValueError if the parameter is a negative number
        if payment < 0:
            raise ValueError("Payment amount cannot be negative.")

        # Use the protected method
        self._set_balance(self.get_balance() - payment)

    def __str__(self):
        """ Returns a string representation of self """
        return "\ncustomer: " + str(self._customer) + "\nbank: " + str(self._bank) + \
               "\naccount: " + str(self._account) + "\nlimit: " + str(self._limit) + \
               "\nbalance: " + str(self.get_balance())


################### Inheritance ########################################

class PredatoryCreditCard(CreditCard):
    ''' An extension to CreditCard that compounds interest and fees '''

    def __init__(self, customer, bank, acnt, limit, apr, min_payment_pct=0.05, late_fee=25, balance=0):
        '''Create a new predatory credit card instance.'''
        super().__init__(customer, bank, acnt, limit, balance) 
        self._apr = apr
        
        # Tracking variables for monthly processing
        self._charges_this_month = 0
        self._payments_this_month = 0
        
        # Minimum payment metrics
        self._min_payment_pct = min_payment_pct
        self._late_fee = late_fee
        self._minimum_due = 0 # Assume 0 due for the very first month until processed

    def get_apr(self):
        ''' Returns the APR on a credit card '''
        return self._apr
    
    def charge(self, price):
        ''' Charge given price to the card, assuming sufficient credit limit.
            Assesses $5 fee if denied, and $1 surcharge for >10 calls this month.
        '''
        # Call inherited method which handles the actual incrementing and limit checks
        success = super().charge(price)
        
        # Assess penalty if charge is denied
        if not success:
            self._set_balance(self.get_balance() + 5)
            
        # Track the number of charges
        self._charges_this_month += 1
        
        # Assess $1 surcharge if this is past the 10th charge
        if self._charges_this_month > 10:
            self._set_balance(self.get_balance() + 1)
            
        return success
    
    def make_payment(self, payment):
        ''' Overridden to track payments made during the month. '''
        super().make_payment(payment)
        self._payments_this_month += payment
     
    def process_month(self):
        '''Assess monthly interest, late fees, and reset counters.'''
        
        # 1. Check if the customer met the minimum payment
        if self._payments_this_month < self._minimum_due:
            self._set_balance(self.get_balance() + self._late_fee)
        
        # 2. Assess monthly interest on outstanding balance
        if self.get_balance() > 0:
            monthly_factor = pow(1 + self._apr, 1/12)
            self._set_balance(self.get_balance() * monthly_factor)
            
        # 3. Calculate minimum payment due for the NEXT cycle
        self._minimum_due = self.get_balance() * self._min_payment_pct
        
        # 4. Reset counters for the new month
        self._charges_this_month = 0
        self._payments_this_month = 0

    def __str__(self):
        """ Returns a string representation of self """
        
        return super().__str__() + "\nAPR: " + str(self._apr)


############### Testing the class ########################################     
        
if __name__ == "__main__":
    
    # Text-book code fragment modification 
    print("--- Code Fragment 2.3 Modification Test ---")
    wallet = []
    wallet.append(CreditCard('John Bowman', 'California Savings', '5391 0375 9387 5309', 2500))
    wallet.append(CreditCard('John Bowman', 'California Federal', '3485 0399 3395 1954', 3500))
    wallet.append(CreditCard('John Bowman', 'California Finance', '5391 0375 9387 5309', 5000))

    # The modified loop that pushes exactly one card over the limit:
    for val in range(1, 59):
        wallet[0].charge(val)
        wallet[1].charge(2 * val)
        wallet[2].charge(3 * val)

    for c in range(3):
        print(f"Card {c} Balance: {wallet[c].get_balance()} (Limit: {wallet[c].get_limit()})")

    print("\n--- Testing Predatory Card Features ---")
    visa = PredatoryCreditCard('Sally Shoo', 'Vells', '1234 5678 9012 3456', 5000, 0.0825)
    
    # Test 10+ charge surcharge
    for i in range(12):
        visa.charge(10)  # Total 12 charges. Charges 11 and 12 should assess $1 surcharges.
    print(f"Balance after 12 charges of $10: {visa.get_balance()} (Expected 122)")
    
    # Test Late Fee
    visa.process_month() # Initial min_due was 0, so no late fee yet. New min_due generated.
    print(f"Minimum due for next cycle: {visa._minimum_due}")
    
    # Do not make a payment, trigger next cycle
    visa.process_month() 
    print(f"Balance after ignoring payment (includes late fee & interest): {visa.get_balance()}")
    
    # Test ValueError on negative payment
    try:
        visa.make_payment(-50)
    except ValueError as e:
        print(f"Caught expected error: {e}")