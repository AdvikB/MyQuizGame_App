class Contestant {
    constructor() {
      this.index = null;
      this.answer = 0;
      this.name = null;
      
    }
  
    getCount() {
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value", (data) => {
        contestantCount = data.val();
      })
    }
  
    updateCount(count) {
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update() {
      var info= "players/player" + this.index;
      database.ref(info).set({
        name: this.name,
        distance: this.distance, 
       
  
      });
    }
  
    static getPlayerInfo() {
      var InfoRef = database.ref('players');
       InfoRef.on("value", (data) => {
        allPlayers = data.val();
      })
    }

  
  
  
  

}


