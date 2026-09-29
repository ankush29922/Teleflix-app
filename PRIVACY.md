# Privacy and account data

Developed by xen. Teleflix is an independent Telegram client. It has no Teleflix backend, advertising SDK or analytics SDK.

- **Telegram connection:** authentication, channel access and media requests go through TDLib to Telegram. Telegram's own service terms and privacy policy apply to that connection.
- **Credentials:** this preview asks for your own Telegram API ID/hash on the phone. API configuration and the TDLib database key are wrapped using Android Keystore AES-GCM. Session databases and encrypted vaults are app-private and excluded from Android backup. Never share login codes or passwords in GitHub issues.
- **Local library:** channel/video metadata, pins, stacks, Watch Later and playback progress live in an app-private Room database. The Room metadata itself is not separately encrypted. Each record is scoped to its Telegram account.
- **Media cache:** each account has its own cache folders and image memory cache. Clearing selected media categories for one account leaves the other accounts' media alone. All accounts cleanup is an explicit separate choice. Cache cleanup preserves login state and library metadata.
- **Profile images:** clear profile photos and video artwork count as image cache. Tiny previews may remain with the local account/library metadata after image-cache deletion, and media can download again when viewed.
- **Diagnostics:** bounded crash/operation traces are kept locally. They record exception classes and code locations, not exception messages, login credentials or video names. The app does not upload them automatically.
- **External links:** opening GitHub or submitting a bug report uses your browser and GitHub. Reports are public, so remove personal information before submitting them.
- **Device storage:** Android backup and device transfer are disabled for this app's data. Uninstalling Teleflix removes local app data, including its saved sessions and app-owned cache; it does not delete Telegram cloud content.
