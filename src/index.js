const LIBRARIES = {
  Skill: require("../../../Libraries/Skill")
};

class DateAndTime extends LIBRARIES.Skill{
  constructor(_main, _settings) {
    super(_main, _settings);
    const SELF = this;

    this.Main.Manager.addAction("date.get", function(_intent, _socket){
      const DATE = new Date();
      _intent.Variables.date = SELF.Settings.WeekDays[DATE.getDay()] + " " + DATE.getDate() + " " + SELF.Settings.Months[DATE.getMonth()] + " " + DATE.getFullYear();
      _intent.answer(_socket);
    });

    this.Main.Manager.addAction("time.get", function(_intent, _socket){
      const DATE = new Date();
      _intent.Variables.hour = DATE.getHours();
      _intent.Variables.minute = DATE.getMinutes();
      _intent.answer(_socket);
    });

    this.Main.Manager.addAction("year.get", function(_intent, _socket){
      const DATE = new Date();
      _intent.Variables.year = DATE.getFullYear();
      _intent.answer(_socket);
    });

    this.Main.Manager.addAction("day.get", function(_intent, _socket){
      const DATE = new Date();
      _intent.Variables.day = SELF.Settings.WeekDays[DATE.getDay()];
      _intent.answer(_socket);
    });
  }
}

module.exports = DateAndTime;
