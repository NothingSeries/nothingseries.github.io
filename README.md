# Nothing Series Performance Mods Wiki

[WEBSITE](https://nothingseries.github.io/)

Welcome to the Nothing Series Performance Mods Wiki! This documentation provides comprehensive information about Minecraft performance mods across different mod loaders and versions.

it is made to be a replacement for the current kinda out of date github wikis which just don't look rly good or have old information.

## About

This wiki is built with [Docusaurus](https://docusaurus.io/) and contains information about performance mods for:
- NeoForge
- Forge
- Fabric
- Quilt

## Local Development

```zsh
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy-gh
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Setting up CurseForge Proxy

1. Copy `curseforge-proxy.js.template` to `curseforge-proxy.js`
2. Set your CurseForge API key in your environment variables
3. The proxy will automatically use the API key from the environment variable
NEVER commit your actual API key to the repository. The `curseforge-proxy.js` file is gitignored.

## Progress Tree

### Completed ✅
- [x] fix Psst (Ultra Performance Docs with correct links and edit descriptions)
- [x] maybe show modicons on the pages
- [x] add batch hover tooltip
- [x] add picture support with pre-fetching pictures

### In Progress 🚧
- [ ] Add detailed mod descriptions and usage guides for some mods


### Planned 📋

- [ ] Include credits/contributor list on the website
- [ ] Add better PR and fork instructions
- [ ] Add wiki redirect for modpages
- [ ] restructure the modpage layout
- [ ] Add ALL mods lol


## Credits

### Dev Team
- [Nothing Series](https://akoto090.github.io/nothingseries.html)
- [Akoto090](https://github.com/Akoto090) - The guy who made this docs
- [Lowtrixx](https://github.com/Lowtrixx) - The guy who got the idea from the Refined Storage discord


### Contributors
- [Noahfrechette](https://github.com/Noahfrechette) - The guy who made the legit biggest commit
- [LambdAurora](https://github.com/LambdAurora) - The dev who inspired me to make this
- [DARKLOL680](https://github.com/DARKLOL680) - The guy who showed me the first time the ServerCore mod
- [comp500](https://github.com/comp500) - The dev who let me use information from the quilt-serverside mod list

### Special Thanks
- Minecraft Modding Community - For creating and maintaining performance mods
- The CurseForge Discord - For the feedback and suggestions
- All users who have provided feedback and suggestions!!

## License

This project is licensed under the MIT License - see the LICENSE file for details.
