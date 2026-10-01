<p align="center"><img src="assets/teleflix-icon.png" width="112" alt="Teleflix icon"></p>
<h1 align="center">Teleflix</h1>
<p align="center">Your Telegram video library, made for your phone.<br><strong>Developed by xen</strong></p>

<p align="center"><a href="https://ankush29922.github.io/Teleflix-app/"><strong>Explore the Teleflix website →</strong></a></p>

Teleflix is an independent Android app for watching videos from Telegram channels and groups you already have access to. This is the official public repository for APK downloads, documentation and bug reports. Source code is maintained in a separate private repository.

## Download Teleflix 1.0.0

**[Get the official APK](https://github.com/ankush29922/Teleflix-app/releases/latest)** · Android 8.0 or newer · Free of advertising and analytics SDKs.

Download only from this repository's official Releases page. Avoid repackaged APKs, forwarded files and unknown mirrors. Every release includes a SHA-256 checksum and is signed. Version 1.0.0 uses an optimized, non-debuggable release build with the same signing identity as the previews, so existing installations can update without signing out.

See [SECURITY.md](SECURITY.md) for verification results and what they establish. Teleflix is built as a clean client without hidden installers or bundled third-party apps; no scan or checksum can guarantee that any software is completely virus-free.

## Your library, your layout

- Charcoal and copper Material interface designed for phones.
- Telegram folders, custom channel stacks, pins and frequently used channel shortcuts.
- Newest-first or oldest-first order, remembered for each channel and account.
- Videos load as you scroll. Opening a large channel does not index its complete history.
- One-, two- or three-column video grids. Quality, file size and duration sit on the thumbnail.
- Optional title footers and an image-only layout. Nameless videos never get an empty footer.
- Hide short videos with a custom minimum duration. Unknown lengths stay visible.
- Hold any video to save it to Watch Later; sort saved videos by added date, size or video date.
- Telegram-wide search across your accessible cloud chats, plus local library search.

## A player built for phones

- Double-tap left/right to seek backward/forward 10 seconds.
- Drag the timeline with haptic feedback; swipe the left side for brightness and right side for volume.
- Previous/next controls, thumbnail playlists and optional auto-next.
- A bounded nearby queue loads as you play, rather than loading an entire channel into the player.
- Hold play/pause and slide left/right to switch videos, with haptic feedback.
- Touch lock, Fit/Fill, pinch zoom, playback speed and available audio/subtitle tracks.
- **Settings → Controls guide** explains the controls.

## Storage that looks after itself

Each of up to three accounts has its own cache allowance and cleanup time.

- Default allowance: **5 GB**, with 2 / 5 / 10 GB presets and a custom GB amount.
- **Auto-clean defaults to 1 day after a video's last playback.** Rewatching resets its timer; partially watched videos also qualify.
- Choose Off, 1 / 3 / 7 days or custom whole hours (1–8760) in **Settings → Storage usage → Auto-clean**.
- Cleanup removes expired video ranges and protects videos in use. Images, unplayed preloads, watch progress, saved videos and your login remain intact.
- Background cleanup is periodic, not an exact alarm. Android battery restrictions or force-stop may delay it; opening Teleflix also checks expired cache.
- Selectively clear Videos, Images and Temporary files for one account or all accounts.
- A full-cache prompt lets you clear files or increase the allowance. A phone free-space reserve is maintained.
- Stream files up to 4 GB using bounded range requests. Telegram retains the originals.

GB labels use 1024-based GiB internally. The duration filter applies to channel browsing and queues started from channels.

## Connect your account

1. Download the APK and checksum from [official releases](https://github.com/ankush29922/Teleflix-app/releases).
2. Install or update the APK. If Android asks, allow installation for the browser/file manager you used.
3. Enter your own Telegram application API ID/hash from [my.telegram.org/apps](https://my.telegram.org/apps), then your phone number and Telegram login checks. The country code defaults to +91. No borrowed application credentials or login sessions are bundled.
4. Browse Channels and choose a folder, stack or channel. The Home avatar opens Accounts & settings, where you can add and switch up to three accounts.

## Permissions and privacy

[PERMISSIONS.md](PERMISSIONS.md) explains each permission and its purpose; [PRIVACY.md](PRIVACY.md) explains local data and Telegram connections.

Teleflix does not request contacts, camera, microphone, location or broad shared-storage access. Brightness changes affect only the player window. Android's boot-completed permission lets the OS preserve the local cleanup job after a restart; cleanup does not need a network connection or open the player.

## Report a bug

**[Report bugs on GitHub](https://github.com/ankush29922/Teleflix-app/issues/new?template=bug_report.yml)** or use **Accounts & settings → Report a bug**.

Include the app version, phone model, Android version, steps to reproduce and what you expected. Remove private information from screenshots. Never post login codes, passwords, API hashes, phone numbers or private channel content.

## What has been checked

Logic tests, Android component/cache tests, real Telegram paging/playback and connected-phone UI checks are part of release verification. A simulated 40,000-video dataset checks ordering and bounded queues; it is not a real 40,000-video device benchmark. See the release notes for the final results.

Full 4 GB network stress testing, slow-network seeking across every codec, multiple real-account switching and 16 KB-page-device playback remain outside the tested scope. Codec support depends on the phone. The earlier intermittent closure report has not been reproduced or established as resolved in every condition.

Live translation, external subtitle import and a separate offline-download manager are not included.

Teleflix is not affiliated with Telegram or Netflix and does not supply movies or bypass channel access. Third-party notices are in [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md).
