/**
 * Calendar Picker Component
 *
 * Copyright 2016 Yahoo Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */

export const Utils = {
  START_DATE: 'START_DATE',
  END_DATE: 'END_DATE',
  WEEKDAYS: {'en': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], 'es': ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']},
  MONTHS: [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ],
  MAX_ROWS: 7,
  MAX_COLUMNS: 7,
  FIRST_DAY_OFFSETS: [0, -1, 5, 4, 3, 2, 1],
  getDaysInMonth: function(month, year) {
    const lastDayOfMonth = new Date(year, month + 1, 0);
    return lastDayOfMonth.getDate();
  },
  isSameMonthAndYear: function(date, month, year) {
    if (date) {
      return date.month() === month && date.year() === year;
    }
    return false;
  },
  // Test whether objects' values are different.
  // `exclusions` param ignores provided keys.
  // Returns array of keys that are different (empty array means identical).
  shallowDiff: function(a, b, exclusions = []) {
    const diffs = [];
    for (let key of Object.keys(a)) {
      if (exclusions.includes(key)) {
        continue;
      }
      if (a[key] !== b[key]) {
        diffs.push(key);
      }
    }
    return diffs;
  },
  // Robust compare Moment dates.
  compareDates: function(a, b, granularity) {
    // Allow for falsy (null & undefined) equality.
    if (!a && !b) {
      return true;
    }
    return !!a && !!b && a.isSame(b, granularity);
  },
  getWeekdays: function(firstDay = 0, language = 'en') {
    let from = firstDay;
    const weekdays = [];
    for (let i = 0; i < Utils.WEEKDAYS[language].length; i++) {
      weekdays.push(Utils.WEEKDAYS[language][from]);
      from = from >= Utils.WEEKDAYS[language].length - 1 ? 0 : from + 1;
    }
    return weekdays;
  },
  getISOWeekdaysOrder: function(firstDay = 0, language = 'en') {
    let from = firstDay === 0 ? 7 : firstDay;
    const order = [];
    for (let i = 0; i < Utils.WEEKDAYS[language].length; i++) {
      order.push(from);
      from = from >= Utils.WEEKDAYS[language].length ? 1 : from + 1;
    }
    return order;
  },
};
