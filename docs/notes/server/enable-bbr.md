---
title: Enable bbr
---

<center>
<h1>Enable bbr </h1>
</center>

> see [一键安装最新内核并开启 BBR 脚本](https://teddysun.com/489.html)

> 适用环境

系统支持：CentOS 6+，Debian 7+，Ubuntu 12+

虚拟技术：OpenVZ 以外的，比如 KVM、Xen、VMware 等

内存要求：≥128M

## Usage

```wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh && chmod +x bbr.sh && ./bbr.sh```

## Verify

```bash
sysctl net.ipv4.tcp_available_congestion_control
```

 *shows*

```net.ipv4.tcp_available_congestion_control = bbr cubic reno``` or ```net.ipv4.tcp_available_congestion_control = reno cubic bbr```

```bash
sysctl net.ipv4.tcp_congestion_control
```

 *shows*

```net.ipv4.tcp_congestion_control = bbr```

```bash
lsmod | grep bbr
```

> OpenVz [OpenVZ VPS 安装BBR加速SSR](https://www.jianshu.com/p/78bf7fa24e5e)