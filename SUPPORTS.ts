function versionLessOrEqual(a, b): boolean {
    return compareVersions(a, b) <= 0
}

function parts(a): number[] {
    return a.split(".").map(Number)
}

/**
 * @param a - first version.
 * @param b - second version.
 * @returns
 * - `1` if the version "a" is greater than "b".
 * - `0` the version "a" is equal to "b".
 * - `-1` the version "a" is lower than "b".
 */
export function compareVersions(a, b): number {
    const aParts = parts(a)
    const bParts = parts(b)
    const len = Math.max(aParts?.length, bParts?.length)

    // Iterate over each part of versions and compare them. In case, part is
    // missing, assume its value is equal to 0.
    for (let i = 0; i < len; i += 1) {
        const aVal = aParts[i] || 0
        const bVal = bParts[i] || 0

        if (aVal === bVal) {
            continue
        }
        return aVal > bVal ? 1 : -1
    }
    return 0
}

export function supports(method, paramOrVersion, inVersion?: string): boolean {
    // Method name, parameter, target version.
    if (typeof inVersion === "string") {
        if (method === "web_app_open_link") {
            if (paramOrVersion === "try_instant_view") {
                return versionLessOrEqual("6.4", inVersion)
            }
            if (paramOrVersion === "try_browser") {
                return versionLessOrEqual("7.6", inVersion)
            }
        }

        if (method === "web_app_set_header_color") {
            if (paramOrVersion === "color") {
                return versionLessOrEqual("6.9", inVersion)
            }
        }

        if (method === "web_app_close" && paramOrVersion === "return_back") {
            return versionLessOrEqual("7.6", inVersion)
        }

        if (method === "web_app_setup_main_button" && paramOrVersion === "has_shine_effect") {
            return versionLessOrEqual("7.10", inVersion)
        }
    }

    switch (method) {
        case "web_app_open_tg_link":
        case "web_app_open_invoice":
        case "web_app_setup_back_button":
        case "web_app_set_background_color":
        case "web_app_set_header_color":
        case "web_app_trigger_haptic_feedback":
            return versionLessOrEqual("6.1", paramOrVersion)
        case "web_app_open_popup":
            return versionLessOrEqual("6.2", paramOrVersion)
        case "web_app_close_scan_qr_popup":
        case "web_app_open_scan_qr_popup":
        case "web_app_read_text_from_clipboard":
            return versionLessOrEqual("6.4", paramOrVersion)
        case "web_app_switch_inline_query":
            return versionLessOrEqual("6.7", paramOrVersion)
        case "web_app_invoke_custom_method":
        case "web_app_request_write_access":
        case "web_app_request_phone":
            return versionLessOrEqual("6.9", paramOrVersion)
        case "web_app_setup_settings_button":
            return versionLessOrEqual("6.10", paramOrVersion)
        case "web_app_biometry_get_info":
        case "web_app_biometry_open_settings":
        case "web_app_biometry_request_access":
        case "web_app_biometry_request_auth":
        case "web_app_biometry_update_token":
            return versionLessOrEqual("7.2", paramOrVersion)
        case "web_app_setup_swipe_behavior":
            return versionLessOrEqual("7.7", paramOrVersion)
        case "web_app_share_to_story":
            return versionLessOrEqual("7.8", paramOrVersion)
        case "web_app_setup_secondary_button":
        case "web_app_set_bottom_bar_color":
            return versionLessOrEqual("7.10", paramOrVersion)
        case "web_app_request_safe_area":
        case "web_app_request_content_safe_area":
        case "web_app_request_fullscreen":
        case "web_app_exit_fullscreen":
        case "web_app_set_emoji_status":
        case "web_app_add_to_home_screen":
        case "web_app_check_home_screen":
        case "web_app_request_emoji_status_access":
        case "web_app_check_location":
        case "web_app_open_location_settings":
        case "web_app_request_file_download":
        case "web_app_request_location":
        case "web_app_send_prepared_message":
        case "web_app_start_accelerometer":
        case "web_app_start_device_orientation":
        case "web_app_start_gyroscope":
        case "web_app_stop_accelerometer":
        case "web_app_stop_device_orientation":
        case "web_app_stop_gyroscope":
        case "web_app_toggle_orientation_lock":
            return versionLessOrEqual("8.0", paramOrVersion)
        default:
            return [
                "iframe_ready",
                "iframe_will_reload",
                "web_app_close",
                "web_app_data_send",
                "web_app_expand",
                "web_app_open_link",
                "web_app_ready",
                "web_app_request_theme",
                "web_app_request_viewport",
                "web_app_setup_main_button",
                "web_app_setup_closing_behavior"
            ].includes(method)
    }
}
