/*
 * Aipo is a groupware program developed by TOWN, Inc.
 * Copyright (C) 2004-2015 TOWN, Inc.
 * http://www.aipo.com
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
dojo.provide("aipo.menu.message");

aipo.menu.message.reload = function() {

}

aipo.menu.message.count = function(count) {
    var checker = dojo.byId("messageChecker");
    if (checker > 99) {
        checker.innerHTML = '99+';
        dojo.addClass("messageChecker", "num");
    } else if (count == 0) {
        checker.innerHTML = '';
        dojo.removeClass("messageChecker", "num");
    } else {
        checker.innerHTML = count;
        dojo.addClass("messageChecker", "num");
    }
}