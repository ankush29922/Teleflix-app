# Security and build verification

Teleflix is developed as a clean Android client without advertising or analytics SDKs, hidden installers or bundled third-party apps. No malware is knowingly included. Do not treat a "virus-free" claim, a checksum or a successful antivirus scan as an absolute safety guarantee.

## Official source

Download APKs only from [ankush29922/Teleflix-app Releases](https://github.com/ankush29922/Teleflix-app/releases). Each release publishes the APK's SHA-256 checksum. A checksum verifies that your download matches that published file; it does not independently prove the file is safe. Android also verifies the APK signature when installing or updating it.

Source code is maintained in a private repository. The public repository contains app releases, documentation and bug reports. The current preview is a debug/development build; a production signing transition has not yet happened.

## Checks for 0.3.0

- Android manifest permission review, with purpose documented in PERMISSIONS.md.
- Android lint, JVM logic tests, isolated Android component/cache/database tests and connected-phone playback/UI checks.
- No advertising, analytics or remote-crash-reporting SDK is declared in the application dependencies. Runtime app network functionality is Telegram plus external links the user opens.
- The TDLib native library is a pinned third-party Android build. Its provenance and notices are published with this repository; it was not extracted from the reference APK.
- APK signature and SHA-256 were verified before publication. The published 0.3.0 APK has SHA-256 `a80c64b46beb8d189f54ca5ea815c90c4bf075eb294555832c83c346ef5e0745`.
- A local Microsoft Defender custom scan of this APK on 2026-09-30 completed with **no threats found**. This is one engine’s result for that file at that time, not an independent laboratory certification or an absolute virus-free guarantee.

## Reporting

For functional bugs, use the public issue template without secrets or private media. For a security concern, avoid posting exploit details, credentials or personal data publicly; use GitHub's private vulnerability reporting when it is available on this repository.
