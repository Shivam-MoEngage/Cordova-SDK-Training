/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready

var moe;

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  // Cordova is now initialized. Have fun!
  console.log("Running cordova-" + cordova.platformId + "@" + cordova.version);
  moe = new MoECordova.init();

  moe.on("onInAppShown", function (inAppInfo) {
    console.log("InApp Shown with Info: " + JSON.stringify(inAppInfo));
  });

  moe.on("onInAppClick", function (inAppInfo) {
    console.log("InApp Shown Clicked with Info: " + JSON.stringify(inAppInfo));
  });

  moe.on("onInAppDismiss", function (inAppInfo) {
    console.log("InApp Dismissed with Info: " + JSON.stringify(inAppInfo));
  });

  moe.on("onInAppCustomAction", function (inAppInfo) {
    console.log("InApp Custom Action with Info: " + JSON.stringify(inAppInfo));
  });
}

document
  .getElementById("moe_install")
  .addEventListener("click", setInstallStatus);
document
  .getElementById("moe_update")
  .addEventListener("click", setUpdateStatus);
document.getElementById("moe_unique").addEventListener("click", setUniqueId);
document.getElementById("moe_username").addEventListener("click", setUsername);
document
  .getElementById("moe_firstName")
  .addEventListener("click", setFirstName);
document.getElementById("moe_lastName").addEventListener("click", setLastName);
document.getElementById("moe_email").addEventListener("click", setEmail);

document.getElementById("moe_inapp").addEventListener("click", showINApp);
document.getElementById("moe_logout").addEventListener("click", logout);
document
  .getElementById("moe_trackEmptyEvent")
  .addEventListener("click", trackEmptyEvent);
document
  .getElementById("moe_trackAttrEvent")
  .addEventListener("click", trackEventWithAttributes);

function setInstallStatus() {
  moe.setAppStatus("INSTALL");
}
function setUpdateStatus() {
  moe.setAppStatus("UPDATE");
}
function setUniqueId() {
  moe.setUniqueId("shivam.agrawal@moengage.com");
}
function setUsername() {
  moe.setUserName("SHIVAM");
}
function setFirstName() {
  moe.setFirstName("Shivam");
}
function setLastName() {
  moe.setLastName("Agrawal");
}
function setEmail() {
  moe.setEmail("shivam@moengage.com");
}
function showINApp() {
  moe.showInApp();
}
function logout() {
  moe.logout();
}

function trackEmptyEvent() {
  moe.trackEvent("cordova_empty_event", null, null, null, null, false);
}
function trackEventWithAttributes() {
  moe.trackEvent(
    "cordova_attr_event",
    { attr1: "string", attr2: 123, attr3: false },
    { loc1: { latitude: 14.90123, longitude: 13.1627 } },
    { date1: "2017-08-02T06:05:30.000Z" },
    false
  );
}
