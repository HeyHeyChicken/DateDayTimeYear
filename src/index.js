const LIBRARIES = {
  Skill: require("../../Libraries/Skill")
};

class DateAndTime extends LIBRARIES.Skill{
  constructor(_main, _settings) {
    super(_main, _settings);
    const SELF = this;

    this.Main.Manager.addAction("date.get", function(_intent, _socket){
      const DATE = new Date();
      _intent.answer(_socket, "Nous sommes le " + SELF.Settings.WeekDays[DATE.getDay()] + " " + DATE.getDate() + " " + SELF.Settings.Months[DATE.getMonth()] + " " + DATE.getFullYear() + ".");
    });

    this.Main.Manager.addAction("time.get", function(_intent, _socket){
      const DATE = new Date();
      let text = "Il est " + DATE.getHours() + " heures";
      if(DATE.getMinutes() === 0){
        text += ".";
      }
      else{
        text += " " + DATE.getMinutes() + ".";
      }
      _intent.answer(_socket, text);
    });
  }
}

module.exports = DateAndTime;
