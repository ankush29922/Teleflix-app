# Android permissions

These are the permissions present in the merged Android manifest for Teleflix 1.0.0 (`com.xen.teleflix`). They include permissions contributed by Android libraries.

| Permission | Why Teleflix uses it |
| --- | --- |
| `android.permission.INTERNET` | Connect to Telegram for account sign-in, channel/video metadata, artwork and media ranges. |
| `android.permission.ACCESS_NETWORK_STATE` | Allow networking components to observe connectivity and handle connection changes. It does not grant location access. |
| `android.permission.FOREGROUND_SERVICE` | Run the Media3 media-playback service while a video is being played. |
| `android.permission.FOREGROUND_SERVICE_MEDIA_PLAYBACK` | Declare that foreground service specifically as media playback on recent Android versions. |
| `android.permission.WAKE_LOCK` | Keep the CPU available during playback. The player also keeps its own screen awake while open. |
| `android.permission.RECEIVE_BOOT_COMPLETED` | Let Android retain the periodic local-cache cleanup job across a phone restart. It does not open Teleflix or start video playback at boot. |
| `android.permission.MODIFY_AUDIO_SETTINGS` | Let the player volume slider and right-side vertical swipe adjust the phone's media volume. |
| `com.xen.teleflix.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION` | An app-specific, signature-protected permission supplied by AndroidX to protect internal dynamic receivers. It does not expose personal phone data. |

## Permissions not requested

Teleflix does not request contacts, camera, microphone, location, SMS, call logs, broad file access, shared-storage read/write, accessibility-service control or permission to install other apps. The obsolete storage permission from the TDLib bundle is explicitly removed from the merged manifest.

The brightness slider changes only the player window's brightness and restores its previous override on exit. It does not require `WRITE_SETTINGS`. Video ranges and artwork are stored in the app's own private/cache directories, so broad storage permission is unnecessary.

GitHub and bug-report buttons open your browser after you tap them; they do not submit reports automatically.

The cache-cleanup JobService is protected by `android.permission.BIND_JOB_SERVICE`, so Android schedules it; other ordinary apps cannot invoke it. Cleanup needs no exact-alarm, notification, network or shared-storage permission. Android can delay jobs under battery restrictions; reopening Teleflix also checks expired video cache.
