# Security and build verification

Teleflix is developed as a clean Android client without advertising or analytics SDKs, hidden installers or bundled third-party apps. No malware is knowingly included. Do not treat a "virus-free" claim, a checksum or a successful antivirus scan as an absolute safety guarantee.

## Official source

Download APKs only from [ankush29922/Teleflix-app Releases](https://github.com/ankush29922/Teleflix-app/releases). Each release publishes the APK's SHA-256 checksum. A checksum verifies that your download matches that published file; it does not independently prove the file is safe. Android also verifies the APK signature when installing or updating it.

Source code is maintained in a private repository. The public repository contains app releases, documentation and bug reports. Version 1.0.0 is an optimized, non-debuggable release build. It retains the previews' signing identity so Android can update those installations in place. The certificate's subject is still `Android Debug`; this describes the existing certificate, not the release build's debuggability. The private signing key is stored outside both repositories and is never included in an APK or release asset.

## Checks for 1.0.0

- Android manifest permission review, with purpose documented in PERMISSIONS.md.
- Android release lint: 0 errors, 6 warnings and 1 hint. The storage warning points to a manifest removal directive; shared-storage permissions are absent from the packaged APK.
- 28 JVM tests, 27 normal Android component/cache/database/UI tests, and a separate opt-in live Telegram paging test passed. The normal runner also reports one intentionally skipped live-account test.
- Cache tests cover expiration, rewatching, disabled cleanup, active playback/reads, account isolation and preservation of images, saved videos and watch progress. A simulated 40,000-video dataset checks paging order and bounded queues; this is not a real-device performance benchmark.
- No advertising, analytics or remote-crash-reporting SDK is declared in the application dependencies. Runtime app network functionality is Telegram plus external links the user opens.
- The TDLib native library is a pinned third-party Android build. Its provenance and notices are published with this repository; it was not extracted from the reference APK.
- APK v2/v3 signatures and ZIP/native-library alignment verified. The installed release APK has the same SHA-256 as the published deliverable.
- APK SHA-256: `f418f7f5e69c370b51a1aac42bff50942e1601d53b4306b2fcaaef1b876b7a8f`.
- Signing certificate SHA-256: `ae3ce70297520f8b6f46f7140ccbbb0b0d2070e0d7f0881d0ad861fe9499edae`. This matches the previous official 0.3.0 APK.
- A local Microsoft Defender custom scan of this APK on 2026-09-30 completed with **no threats found**. This is one engine’s result for that file at that time, not an independent laboratory certification or an absolute virus-free guarantee.

Full 4 GB network stress testing, multiple real-account switching, all device codecs and 16 KB-page-device playback remain outside the tested scope. The earlier intermittent closure report has not been reproduced or proven resolved in every condition.

## Reporting

For functional bugs, use the public issue template without secrets or private media. For a security concern, avoid posting exploit details, credentials or personal data publicly; use GitHub's private vulnerability reporting when it is available on this repository.
