// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import { Tooltip } from "bootstrap/dist/js/bootstrap.bundle";

import "../src/application.css";

Rails.start()
ActiveStorage.start()

// document.addEventListener("DOMContentLoaded", () => {
//   const tooltipTriggerList = document.querySelectorAll(
//     '[data-toggle="tooltip"]'
//   )
//   [...tooltipTriggerList].map((el) => new Tooltip(el))
// })