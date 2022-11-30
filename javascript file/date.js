function membership(name, type, active) {
    this.name = name;
    this.type = type;
    this.active = active;
    this.membershipactivetilldate = new Date();
  
    this.renewMembership = function()
     {
        if (this.type === "Standard")
         {
            this.membershipactivetilldate.setMonth(
                this.membershipactivetilldate.getMonth() + 1
            );
        }
         else if (this.type === "Yearly")
          {
            this.membershipactivetilldate.setFullYear(
                this.membershipactivetilldate.getFullYear() + 1
            );
        }
    };
  }

  const member1 = new membership("John", "Standard", true);
  member1.renewMembership();
  console.log(member1);
  
  const member2 = new membership("Smith", "Yearly", true);
  member2.renewMembership();
  console.log(member2);