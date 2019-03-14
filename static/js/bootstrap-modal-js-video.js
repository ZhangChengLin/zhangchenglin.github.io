(function () {
    bootstrap_modal_js_video();

    function bootstrap_modal_js_video() {
        const info = document.querySelectorAll("[data-type='modal-video']");
        for (let i = 0; i < info.length; i++) {
            info[i].addEventListener("click", function (e) {
                const id = bootstrapModalJs(" ", bootstrap_modal_js_build_video(e), "", "xl", true);
                bootstrap_modal_js_modal_add_title(e, id);
                bootstrap_modal_js_video_add_id(id);

                bootstrap_modal_js_switch_video(id);
            });
        }
    }

    function bootstrap_modal_js_get_video_source(e) {
        const video_source = e.target;
        const video_source_mp4 = video_source.getAttribute("data-source-mp4");
        const video_source_ogg = video_source.getAttribute("data-source-ogg");
        const video_source_webm = video_source.getAttribute("data-source-webm");
        return {
            "mp4": video_source_mp4,
            "ogg": video_source_ogg,
            "webm": video_source_webm,
        };
    }

    function bootstrap_modal_js_get_video_poster(e) {
        const video_poster = e.target;
        return video_poster.getAttribute("data-video-poster") ? video_poster.getAttribute("data-video-poster") : "";
    }

    function bootstrap_modal_js_build_video(e) {
        const video_source_obj = bootstrap_modal_js_get_video_source(e);
        const video_poster_value = bootstrap_modal_js_get_video_poster(e);
        const video = document.createElement("video");
        const p_no_js = document.createElement("p");
        const p_no_js_a = document.createElement("a");
        video.className = "mx-auto video-js";
        video.width = "640";
        video.height = "264";
        video.preload = "metadata";
        video_poster_value ? video.poster = video_poster_value : "";
        video.setAttribute("data-setup", "{}");
        video.controls = "controls";

        p_no_js.className = "vjs-no-js text-danger";

        p_no_js_a.href = "";
        p_no_js_a.target = "_blank";
        p_no_js_a.title = "请升级浏览器";
        p_no_js_a.innerHTML = "请开启JavaScript功能或者升级浏览器版本";

        for (let i in video_source_obj) {
            if (video_source_obj[i]) {
                let url = video_source_obj[i];
                video_source_obj[i] = document.createElement("source");
                video_source_obj[i].type = "video/" + i;
                video_source_obj[i].src = url;
                video.appendChild(video_source_obj[i]);
            }
        }
        p_no_js.appendChild(p_no_js_a);
        video.appendChild(p_no_js);
        return video;
    }

    function bootstrap_modal_js_modal_add_title(e, id) {
        const modal_title = document.querySelector("#modalTitle_" + id);
        const modal_title_value = e.target.title ? e.target.title : e.target.innerHTML;
        modal_title ? modal_title.innerHTML = modal_title_value : "";
    }

    function bootstrap_modal_js_video_add_id(id) {
        const modal = document.querySelector("#Modal_" + id);
        const video = modal.querySelector("video");
        video.id = "video_" + id;
    }

    function bootstrap_modal_js_switch_video(id) {
        const player = videojs("#video_" + id);
    }

})();
