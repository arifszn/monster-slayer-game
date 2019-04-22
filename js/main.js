new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    menuVisible: false,
    history: 0,
    specialAttackCounter: 1,
    healthKit: 1,
    logs: []

  },
  methods: {
    startNewGame: function() {
      this.menuVisible = !this.menuVisible;
    },
    attack: function() {
      this.history++;

      var randomNumber = Math.floor((Math.random() * 12) + 1);
      this.playerHealth -= randomNumber;

      var randomNumber2 = Math.floor((Math.random() * 10) + 1);
      this.monsterHealth -= randomNumber2;

      var newArray = {
        message1: 'Player attacked for ' + randomNumber2,
        message2: 'Monster attacked for ' + randomNumber
      };
      this.logs.push(newArray);
      this.winOrLose();

    },
    specialAttack: function() {
      this.history++;
      var randomNumber = Math.floor(Math.random() * (+15 - +10)) + +10;
      this.playerHealth -= randomNumber;

      if (this.specialAttackCounter == 0) {
        alert('No Special Attack Left');
        var newArray = {
          message1: 'Player has no Special Attack left',
          message2: 'Monster attacked for ' + randomNumber
        };

      } else {

        var randomNumber2 = Math.floor(Math.random() * (+20 - +10)) + +10;
        this.monsterHealth -= randomNumber2;
        this.specialAttackCounter--;
        var newArray = {
          message1: 'Player attacked for ' + randomNumber2,
          message2: 'Monster attacked for ' + randomNumber
        };
      }
      this.logs.push(newArray);
      this.winOrLose();
    },
    heal: function() {
      this.history++;
      if (this.playerHealth < 100 ) {
        var randomNumber2 = Math.floor(Math.random() * (+5 - +1)) + +5;
        this.playerHealth -= randomNumber2;
      } else {
        var randomNumber2 = 0;
      }
      if (this.healthKit == 0) {
        alert("No heal left");
        var newArray = {
          message1: 'Player has no heal left',
          message2: 'Monster attacked for ' + randomNumber2
        };
      } else {
        this.healthKit--;
        if (this.playerHealth < 95) {
          var randomNumber = Math.floor(Math.random() * (+10 - +5)) + +10;
          this.playerHealth += randomNumber;
        } else {
          var randomNumber = 0;
          this.playerHealth += randomNumber;
        }
        var newArray = {
          message1: 'Player healed for ' + randomNumber,
          message2: 'Monster attacked for ' + randomNumber2
        };
      }

      this.logs.push(newArray);
      this.winOrLose();
    },
    winOrLose: function() {

      if (this.monsterHealth <= 0) {
        alert('You WON!!');
        this.resetGame();
      }
      if (this.playerHealth <= 0) {
        alert('Monster WON!!');
        this.resetGame();

      }


    },
    resetGame: function() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.menuVisible = false;
      this.specialAttackCounter = 2;
      this.history = 0;
      this.healthKit = 2;
      this.logs = [];
    }
  }
})
