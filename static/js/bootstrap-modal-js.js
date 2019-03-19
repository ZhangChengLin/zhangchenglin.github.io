/*!
 * Name: bootstrap-modal-js
 * Version: 1.0.0-beta.1
 * Author: 张成林
 * Email: 469946668@qq.com
 * Description: Bootstrap modal
 * Copyright (c) 2019 张成林
 * Licenses: MIT
 * under the MIT License (license terms are at https://opensource.org/licenses/MIT).
 * GitHub: https://github.com/zhangchenglin/bootstrap-modal-js
 * issues: https://github.com/zhangchenglin/bootstrap-modal-js/issues
 */

function bootstrapModalJs(title, body, footer, ModalSizes, VerticallyCentered, LongContentType, EventType, CallbackFunction, Options) {
    title = title ? (typeof title === "function" ? title() : (typeof title === "string" ? title : (typeof title === "object" ? title : ""))) : "";
    body = body ? (typeof body === "function" ? body() : (typeof body === "string" ? body : (typeof body === "object" ? body : ""))) : "";
    footer = footer ? (typeof footer === "function" ? footer() : (typeof footer === "string" ? footer : (typeof footer === "object" ? footer : ""))) : "";
    ModalSizes = ModalSizes && typeof ModalSizes !== "undefined" && typeof ModalSizes !== "boolean" ? ModalSizes : "default";
    VerticallyCentered = VerticallyCentered && typeof VerticallyCentered === "boolean" ? VerticallyCentered : false;
    LongContentType = LongContentType && typeof LongContentType === "boolean" ? LongContentType : false;
    EventType = EventType && typeof EventType === "string" ? EventType : "";
    CallbackFunction = CallbackFunction && typeof CallbackFunction === "function" ? CallbackFunction : "";
    Options = Options ? (typeof Options === "function" ? Options() : Options) : "";

    const document_body = document.querySelector("body");
    const TimeID = new Date().getTime().toString();
    const modal_ID = "Modal_" + TimeID;
    const modal_header_ID = "modalHeader_" + TimeID;
    const modal_title_ID = "modalTitle_" + TimeID;
    const modal_body_ID = "modalBody_" + TimeID;
    const modal_footer_ID = "modalFooter_" + TimeID;
    const modal = document.createElement("div");
    const modal_dialog = document.createElement("div");
    const modal_content = document.createElement("div");
    const modal_header = document.createElement("div");
    const modal_title = document.createElement("h5");
    const modal_close_btn = document.createElement("button");
    const modal_close_span = document.createElement("span");
    const modal_body = document.createElement("div");
    const modal_footer = document.createElement("div");

    modal.id = modal_ID;
    modal.className = "modal fade";
    modal.tabIndex = "-1";
    modal.role = "dialog";
    modal.setAttribute("aria-hidden", "true");
    typeof title === "string" ? modal.setAttribute("aria-labelledby", modal_title_ID) : "";

    modal_dialog.className = "modal-dialog";
    switch (ModalSizes) {
        case "default":
            break;
        case "sm":
            modal_dialog.className += " modal-sm";
            break;
        case "lg":
            modal_dialog.className += " modal-lg";
            break;
        case "xl":
            modal_dialog.className += " modal-xl";
            break;
        default:
            modal_dialog.className += " " + ModalSizes;
    }

    switch (VerticallyCentered) {
        case true:
            modal_dialog.className += " modal-dialog-centered";
            break;
        case false:
        default:
    }

    switch (LongContentType) {
        case true:
            modal_dialog.className += " modal-dialog-scrollable";
            break;
        case false:
        default:
    }
    modal_dialog.role = "document";

    modal_content.className = "modal-content shadow-lg overflow-hidden";

    modal_header.className = "modal-header";
    modal_header.id = modal_header_ID;

    typeof title === "string" ? modal_title.id = modal_title_ID : "";
    title instanceof HTMLElement ? modal_header.appendChild(title) : modal_title.innerHTML = title;

    modal_close_btn.className = "close";
    modal_close_btn.type = "button";
    modal_close_btn.setAttribute("data-dismiss", "modal");
    modal_close_btn.setAttribute("aria-label", "Close");

    modal_close_span.setAttribute("aria-hidden", "true");
    modal_close_span.innerHTML = "&times;";

    modal_body.className = "modal-body";
    modal_body.id = modal_body_ID;
    body instanceof HTMLElement ? modal_body.appendChild(body) : modal_body.innerHTML = body;

    modal_footer.className = "modal-footer";
    modal_footer.id = modal_footer_ID;
    footer instanceof HTMLElement ? modal_footer.appendChild(footer) : modal_footer.innerHTML = footer;

    title ? modal_close_btn.appendChild(modal_close_span) : "";
    typeof title === "string" ? modal_header.appendChild(modal_title) : "";
    title ? modal_header.appendChild(modal_close_btn) : "";
    title ? modal_content.appendChild(modal_header) : "";
    modal_content.appendChild(modal_body);
    footer ? modal_content.appendChild(modal_footer) : "";
    modal_dialog.appendChild(modal_content);
    modal.appendChild(modal_dialog);
    document_body.appendChild(modal);

    EventType && CallbackFunction ? bootstrap_modal_js_events(modal_ID, EventType, CallbackFunction) : "";

    const $modal_ID = $("#" + modal_ID);
    Options ? $modal_ID.modal(Options) : "";
    $modal_ID.modal("show");
    removeBootstrapModalJs(modal_ID);
    return TimeID;
}

function removeBootstrapModalJs(modal_id) {
    const modal_element = document.querySelector("#" + modal_id);
    const $modal = $("#" + modal_id);
    $modal.on("hidden.bs.modal", function () {
        $modal.modal("dispose");
        setTimeout(function () {
            modal_element.parentElement.removeChild(modal_element);
        }, 5e2);
    });
}

function bootstrap_modal_js_events(modal_id, type, fun) {
    const modal = $("#" + modal_id);
    switch (type) {
        case "show":
            modal.on("show.bs.modal", function () {
                return fun();
            });
            break;
        case "shown":
            modal.on("shown.bs.modal", function () {
                return fun();
            });
            break;
        case "hide":
            modal.on("hide.bs.modal", function () {
                return fun();
            });
            break;
        case "hidden":
            modal.on("hidden.bs.modal", function () {
                return fun();
            });
            break;
        default:
    }
}
