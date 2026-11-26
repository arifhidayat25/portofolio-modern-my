import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Shield,
  Server,
  Network,
  Lock,
  CheckCircle2,
  Terminal,
  Download,
  ZoomIn,
  X,
  Globe,
  Layers,
  Cpu,
  Copy,
  Check,
  Building,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './CiscoCaseStudyPage.css';

interface CiscoCaseStudyPageProps {
  onBack: () => void;
}

export const CiscoCaseStudyPage: React.FC<CiscoCaseStudyPageProps> = ({ onBack }) => {
  const { language, setLanguage, content } = useLanguage();
  const [activeTab, setActiveTab] = useState<'mls-svi' | 'nat-routing' | 'acl-ssh' | 'port-sec'>('mls-svi');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [copiedTab, setCopiedTab] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleCopy = (tabKey: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedTab(tabKey);
    setTimeout(() => setCopiedTab(null), 2000);
  };

  const isId = language === 'id';

  const t = {
    back: isId ? 'Kembali ke Portofolio' : 'Back to Portfolio',
    caseBadge: isId ? 'Studi Kasus Jaringan & Keamanan' : 'Network & Security Case Study',
    title: isId
      ? 'Infrastruktur Jaringan Enterprise Puskesmas 2 Lantai'
      : 'Puskesmas (Primary Healthcare) 2-Floor Enterprise Network',
    subtitle: isId
      ? 'Perancangan dan simulasi infrastruktur jaringan Puskesmas 2 lantai dengan segmentasi VLAN, Inter-VLAN Routing SVI, DHCP Split-DNS, NAT Overload, Extended ACL, Port Security, SSHv2, dan monitoring CCTV IoT terpusat.'
      : 'Full network infrastructure design and simulation for a 2-floor primary healthcare center featuring VLAN segmentation, SVI Inter-VLAN Routing, Split-DNS DHCP, NAT Overload, Extended ACL, Port Security, SSHv2, and centralized IoT CCTV monitoring.',
    overview: isId ? 'Latar Belakang & Tantangan Infrastruktur' : 'Background & Infrastructure Challenges',
    challengesDesc: isId
      ? 'Fasilitas pelayanan kesehatan tingkat pertama seperti Puskesmas menangani dua jenis lalu lintas jaringan dengan tingkat sensitivitas yang bertolak belakang: operasional klinis-manajerial (Rekam Medis/SIMPUS, bridging PCare BPJS, dan pengawasan CCTV) serta akses publik (Wi-Fi ruang tunggu pasien). Tanpa segmentasi yang tepat, risiko berikut mudah terjadi:'
      : 'Primary healthcare facilities handle two categories of network traffic with contrasting sensitivity: clinical-administrative operations (SIMPUS EMR, PCare BPJS bridging, CCTV surveillance) and public access (patient waiting room Wi-Fi). Without proper segmentation, the following risks arise:',
    ch1Title: isId ? 'Broadcast Domain Tidak Tersegmentasi' : 'Unsegmented Broadcast Domain',
    ch1Desc: isId
      ? 'Perangkat pengunjung di ruang tunggu berada dalam satu broadcast domain dengan server SIMPUS dan komputer poli, membuka risiko sniffing data rekam medis pasien.'
      : 'Visitor devices in the waiting room share a broadcast domain with the SIMPUS server and clinical workstations, exposing patient medical records to network sniffing.',
    ch1Sol: isId ? 'Solusi: 802.1Q VLAN Segmentasi 5 Zona' : 'Solution: 802.1Q VLAN 5-Zone Segmentation',
    ch2Title: isId ? 'Konektivitas Bridging PCare BPJS' : 'PCare BPJS Bridging Connectivity',
    ch2Desc: isId
      ? 'Koneksi ke portal web PCare BPJS (pcare.bpjs.go.id) harus tersedia dari seluruh workstation klinis tanpa memutus akses SIMPUS internal, memerlukan Split-DNS dan NAT yang terkoordinasi.'
      : 'Access to the PCare BPJS web portal must be available from all clinical workstations without disrupting internal SIMPUS access, requiring coordinated Split-DNS and NAT.',
    ch2Sol: isId ? 'Solusi: NAT Overload + Split-DNS Internal/Publik' : 'Solution: NAT Overload + Split-DNS Internal/Public',
    ch3Title: isId ? 'Keamanan Fisik & Administrasi Berlapis' : 'Physical & Administrative Layered Security',
    ch3Desc: isId
      ? 'Port LAN di area publik (loket pendaftaran) rentan terhadap perangkat asing, administrasi switch/router memerlukan enkripsi, dan Wi-Fi pasien harus terisolasi total dari LAN internal.'
      : 'LAN ports in public areas (registration counter) are vulnerable to rogue devices, switch/router administration requires encryption, and patient Wi-Fi must be fully isolated from the internal LAN.',
    ch3Sol: isId ? 'Solusi: Port Security + SSHv2 (VLAN 99) + Extended ACL' : 'Solution: Port Security + SSHv2 (VLAN 99) + Extended ACL',
    topologyTitle: isId ? 'Diagram Topologi Jaringan Puskesmas' : 'Puskesmas Network Topology Diagram',
    topologySubtitle: isId
      ? 'Arsitektur Hierarkis Core–Access: Multilayer Switch Layer 3 (MLS-CORE) + Edge Router (R-EDGE) + 2 Access Switch Lantai + Link WAN ke ISP & Server PCare BPJS'
      : 'Hierarchical Core–Access Architecture: Layer 3 Multilayer Switch (MLS-CORE) + Edge Router (R-EDGE) + 2 Floor Access Switches + WAN Link to ISP & PCare BPJS Server',
    clickToZoom: isId ? 'Klik untuk memperbesar resolusi penuh' : 'Click to view full high-resolution',
    inventoryTitle: isId ? 'Inventaris Perangkat & Zona Jaringan' : 'Device Inventory & Network Zones',
    addressingTitle: isId ? 'Skema Segmentasi VLAN & Pengalamatan IP' : 'VLAN Segmentation & IP Addressing Scheme',
    addressingSubtitle: isId
      ? 'Blok privat 10.10.X.0/24 — oktet ketiga merepresentasikan ID VLAN untuk kemudahan identifikasi dan audit'
      : 'Private block 10.10.X.0/24 — third octet represents VLAN ID for easy identification and auditing',
    cliTitle: isId ? 'Konfigurasi Teknis Utama (CLI Showcase)' : 'Core Technical Configurations (CLI Showcase)',
    cliSubtitle: isId
      ? 'Cuplikan konfigurasi nyata yang diterapkan pada Cisco Catalyst 3560 & 2960 serta Router 2911'
      : 'Real production-ready configuration snippets applied on Cisco Catalyst 3560, 2960, and Router 2911',
    testingTitle: isId ? 'Matriks Pengujian & Hasil Verifikasi' : 'Testing Matrix & Verification Results',
    testingSubtitle: isId
      ? 'Pengujian skenario konektivitas dan kepatuhan kebijakan keamanan jaringan berbasis skenario nyata'
      : 'Scenario-based connectivity and security policy compliance testing results',
    downloadTitle: isId ? 'Lampiran File & Sumber Daya' : 'Project Files & Deliverables',
    downloadSubtitle: isId
      ? 'Unduh file simulasi asli untuk dibuka dan diuji langsung di Cisco Packet Tracer'
      : 'Download the original simulation file to open and test directly in Cisco Packet Tracer',
    ctaBtn: isId ? 'Hubungi Saya' : 'Contact Me',
  };

  const cliSnippets = {
    'mls-svi': `! ==================================================
! CISCO CATALYST 3560-24PS (CORE MULTILAYER SWITCH)
! Inter-VLAN Routing (SVI), Trunking & DHCP Server
! ==================================================
MLS-CORE# configure terminal
MLS-CORE(config)# ip routing

! --- Uplink Routed Port ke Edge Router ---
MLS-CORE(config)# interface GigabitEthernet0/1
MLS-CORE(config-if)# description TRANSIT-TO-R-EDGE
MLS-CORE(config-if)# no switchport
MLS-CORE(config-if)# ip address 10.10.255.2 255.255.255.252
MLS-CORE(config-if)# no shutdown
MLS-CORE(config-if)# exit

! --- Switch Virtual Interfaces (Gateway per VLAN) ---
MLS-CORE(config)# interface Vlan10
MLS-CORE(config-if)# description GW-MEDIS (Loket, Poli, IGD, Farmasi)
MLS-CORE(config-if)# ip address 10.10.10.1 255.255.255.0
MLS-CORE(config-if)# no shutdown

MLS-CORE(config-if)# interface Vlan20
MLS-CORE(config-if)# description GW-MANAJEMEN (Kapus, TU, Wi-Fi Staff)
MLS-CORE(config-if)# ip address 10.10.20.1 255.255.255.0
MLS-CORE(config-if)# no shutdown

MLS-CORE(config-if)# interface Vlan30
MLS-CORE(config-if)# description GW-SERVER (SIMPUS & IoT CCTV Server)
MLS-CORE(config-if)# ip address 10.10.30.1 255.255.255.0
MLS-CORE(config-if)# no shutdown

MLS-CORE(config-if)# interface Vlan40
MLS-CORE(config-if)# description GW-CCTV-IOT (4 IP Camera Statis Lt.1 & Lt.2)
MLS-CORE(config-if)# ip address 10.10.40.1 255.255.255.0
MLS-CORE(config-if)# no shutdown

MLS-CORE(config-if)# interface Vlan50
MLS-CORE(config-if)# description GW-GUEST (Wi-Fi Ruang Tunggu Pasien)
MLS-CORE(config-if)# ip address 10.10.50.1 255.255.255.0
MLS-CORE(config-if)# no shutdown
MLS-CORE(config-if)# exit

! --- Split-DNS DHCP Pools (Internal vs Guest) ---
MLS-CORE(config)# ip dhcp excluded-address 10.10.10.1 10.10.10.10
MLS-CORE(config)# ip dhcp pool POOL-MEDIS
MLS-CORE(dhcp-config)# network 10.10.10.0 255.255.255.0
MLS-CORE(dhcp-config)# default-router 10.10.10.1
MLS-CORE(dhcp-config)# dns-server 10.10.30.10

MLS-CORE(dhcp-config)# ip dhcp pool POOL-GUEST
MLS-CORE(dhcp-config)# network 10.10.50.0 255.255.255.0
MLS-CORE(dhcp-config)# default-router 10.10.50.1
MLS-CORE(dhcp-config)# dns-server 202.100.1.10
MLS-CORE(dhcp-config)# exit

! --- 802.1Q Trunk ke Switch Lantai 1 & Lantai 2 ---
MLS-CORE(config)# interface range FastEthernet0/23 - 24
MLS-CORE(config-if-range)# switchport trunk encapsulation dot1q
MLS-CORE(config-if-range)# switchport mode trunk
MLS-CORE(config-if-range)# switchport trunk native vlan 99
MLS-CORE(config-if-range)# switchport trunk allowed vlan 10,20,30,40,50,99
MLS-CORE(config-if-range)# end`,

    'nat-routing': `! ==================================================
! CISCO 2911 ROUTER (EDGE PUSKESMAS)
! NAT Overload (PAT) & Static Routing ke PCare BPJS
! ==================================================
R-EDGE# configure terminal

! --- Interface Internal (Link Transit ke Core Switch) ---
R-EDGE(config)# interface GigabitEthernet0/0
R-EDGE(config-if)# description TRANSIT-TO-MLS-CORE
R-EDGE(config-if)# ip address 10.10.255.1 255.255.255.252
R-EDGE(config-if)# ip nat inside
R-EDGE(config-if)# no shutdown

! --- Interface Eksternal (Link WAN ke Router ISP) ---
R-EDGE(config-if)# interface GigabitEthernet0/1
R-EDGE(config-if)# description WAN-TO-R-ISP
R-EDGE(config-if)# ip address 203.0.113.2 255.255.255.252
R-EDGE(config-if)# ip nat outside
R-EDGE(config-if)# no shutdown
R-EDGE(config-if)# exit

! --- NAT Overload (PAT) untuk Seluruh Subnet Internal ---
R-EDGE(config)# access-list 1 permit 10.10.0.0 0.0.255.255
R-EDGE(config)# ip nat inside source list 1 interface GigabitEthernet0/1 overload

! --- Default Route (ISP/PCare) & Return Route (LAN) ---
R-EDGE(config)# ip route 0.0.0.0 0.0.0.0 203.0.113.1
R-EDGE(config)# ip route 10.10.0.0 255.255.0.0 10.10.255.2
R-EDGE(config)# end
R-EDGE# show ip nat translations`,

    'acl-ssh': `! ==================================================
! CISCO CATALYST 3560-24PS (SECURITY POLICY)
! Extended ACL Isolasi Guest & Enkripsi Manajemen SSHv2
! ==================================================
MLS-CORE# configure terminal

! --- Extended ACL: Blokir Wi-Fi Pasien ke LAN Internal ---
MLS-CORE(config)# ip access-list extended ACL-GUEST-ISOLASI
MLS-CORE(config-ext-nacl)# permit udp any eq bootpc any eq bootps
MLS-CORE(config-ext-nacl)# permit icmp 10.10.50.0 0.0.0.255 host 10.10.50.1
MLS-CORE(config-ext-nacl)# deny ip 10.10.50.0 0.0.0.255 10.10.0.0 0.0.255.255
MLS-CORE(config-ext-nacl)# permit ip any any
MLS-CORE(config-ext-nacl)# exit

! --- Penerapan ACL Inbound pada SVI VLAN 50 (Guest) ---
MLS-CORE(config)# interface Vlan50
MLS-CORE(config-if)# ip access-group ACL-GUEST-ISOLASI in
MLS-CORE(config-if)# exit

! --- Hardening Akses Remote: SSHv2 Only (Nonaktifkan Telnet) ---
MLS-CORE(config)# ip domain-name puskesmas.local
MLS-CORE(config)# username admin privilege 15 secret admin123
MLS-CORE(config)# crypto key generate rsa modulus 1024
MLS-CORE(config)# ip ssh version 2
MLS-CORE(config)# service password-encryption

MLS-CORE(config)# line vty 0 15
MLS-CORE(config-line)# login local
MLS-CORE(config-line)# transport input ssh
MLS-CORE(config-line)# end
MLS-CORE# show access-lists ACL-GUEST-ISOLASI`,

    'port-sec': `! ==================================================
! CISCO CATALYST 2960-24TT (ACCESS SWITCH LANTAI 1)
! Port Security Loket, Segmentasi CCTV & Mgmt VLAN 99
! ==================================================
SW-LT1# configure terminal

! --- Interface Manajemen Khusus Admin IT (VLAN 99) ---
SW-LT1(config)# interface Vlan99
SW-LT1(config-if)# description MGMT-SW-LT1
SW-LT1(config-if)# ip address 10.10.99.2 255.255.255.0
SW-LT1(config-if)# no shutdown
SW-LT1(config-if)# exit
SW-LT1(config)# ip default-gateway 10.10.99.1

! --- Hardening Port Loket Pendaftaran (Anti Rogue Device) ---
SW-LT1(config)# interface FastEthernet0/1
SW-LT1(config-if)# description PC-LOKET-PORT-SECURITY
SW-LT1(config-if)# switchport mode access
SW-LT1(config-if)# switchport access vlan 10
SW-LT1(config-if)# switchport port-security
SW-LT1(config-if)# switchport port-security maximum 1
SW-LT1(config-if)# switchport port-security mac-address sticky
SW-LT1(config-if)# switchport port-security violation shutdown
SW-LT1(config-if)# spanning-tree portfast
SW-LT1(config-if)# exit

! --- Port Khusus IP Camera / CCTV Lantai 1 (VLAN 40) ---
SW-LT1(config)# interface range FastEthernet0/11 - 12
SW-LT1(config-if-range)# description CCTV-PARKIR-DAN-TUNGGU
SW-LT1(config-if-range)# switchport mode access
SW-LT1(config-if-range)# switchport access vlan 40
SW-LT1(config-if-range)# spanning-tree portfast
SW-LT1(config-if-range)# exit

! --- Trunk Uplink dengan Native VLAN Terisolasi ---
SW-LT1(config)# interface FastEthernet0/24
SW-LT1(config-if)# description TRUNK-TO-MLS-CORE
SW-LT1(config-if)# switchport mode trunk
SW-LT1(config-if)# switchport trunk native vlan 99
SW-LT1(config-if)# switchport trunk allowed vlan 10,20,30,40,50,99
SW-LT1(config-if)# end
SW-LT1# show port-security interface FastEthernet0/1`,
  };

  const addressingData = [
    { vlan: 'VLAN 10', name: 'MEDIS', subnet: '10.10.10.0/24', gateway: '10.10.10.1', alloc: 'PRN-LOKET: .10 (Statis) | PC Medis: .11–.254 (DHCP)', dns: '10.10.30.10', color: '#3b82f6' },
    { vlan: 'VLAN 20', name: 'MANAJEMEN', subnet: '10.10.20.0/24', gateway: '10.10.20.1', alloc: 'PC Kapus, TU, Laptop Staff: .11–.254 (DHCP)', dns: '10.10.30.10', color: '#10b981' },
    { vlan: 'VLAN 30', name: 'SERVER', subnet: '10.10.30.0/24', gateway: '10.10.30.1', alloc: 'SRV-SIMPUS: .10 | SRV-IOT: .20 (Statis)', dns: '—', color: '#8b5cf6' },
    { vlan: 'VLAN 40', name: 'CCTV_IOT', subnet: '10.10.40.0/24', gateway: '10.10.40.1', alloc: 'TUNGGU: .20 | PARKIR: .21 | KORIDOR2: .22 | GUDANG: .23', dns: '—', color: '#f59e0b' },
    { vlan: 'VLAN 50', name: 'GUEST', subnet: '10.10.50.0/24', gateway: '10.10.50.1', alloc: 'Wi-Fi Pasien: .11–.254 (DHCP)', dns: '202.100.1.10 (Publik)', color: '#ec4899' },
    { vlan: 'VLAN 99', name: 'NATIVE_MGMT', subnet: '10.10.99.0/24', gateway: '10.10.99.1', alloc: 'SW-LT1: .2 | SW-LT2: .3 | PC-ADMIN-IT: .10 (Statis)', dns: '—', color: '#64748b' },
    { vlan: 'Transit', name: 'CORE-TO-EDGE', subnet: '10.10.255.0/30', gateway: '—', alloc: 'R-EDGE (Gig0/0): .1 | MLS-CORE (Gig0/1): .2', dns: '—', color: '#06b6d4' },
    { vlan: 'WAN', name: 'EDGE-TO-ISP', subnet: '203.0.113.0/30', gateway: '203.0.113.1', alloc: 'R-ISP: .1 | R-EDGE (NAT Outside): .2', dns: '—', color: '#dc2626' },
    { vlan: 'Publik', name: 'ISP-SERVER', subnet: '202.100.1.0/24', gateway: '202.100.1.1', alloc: 'SRV-PCARE (pcare.bpjs.go.id): 202.100.1.10', dns: '202.100.1.10', color: '#7c3aed' },
  ];

  const deviceInventory = [
    { zone: isId ? 'Eksternal / ISP' : 'External / ISP', devices: [
      { name: 'R-ISP', model: 'Router 2911', role: isId ? 'Gateway simulasi ISP (203.0.113.1 & 202.100.1.1)' : 'Simulated ISP gateway (203.0.113.1 & 202.100.1.1)' },
      { name: 'SRV-PCARE', model: 'Server-PT', role: isId ? 'Web Portal pcare.bpjs.go.id & DNS Publik (202.100.1.10)' : 'Web portal pcare.bpjs.go.id & Public DNS (202.100.1.10)' },
    ]},
    { zone: isId ? 'Lantai 2 — Server & Manajemen' : 'Floor 2 — Server & Management', devices: [
      { name: 'R-EDGE', model: 'Router 2911', role: isId ? 'Edge Router Puskesmas (NAT/PAT, Default Route, SSHv2)' : 'Edge Router (NAT/PAT, Default Route, SSHv2)' },
      { name: 'MLS-CORE', model: 'Switch 3560-24PS', role: isId ? 'Core Multilayer Switch (Inter-VLAN SVI, DHCP, ACL, SSHv2)' : 'Core Multilayer Switch (Inter-VLAN SVI, DHCP, ACL, SSHv2)' },
      { name: 'SW-LT2', model: 'Switch 2960-24TT', role: isId ? 'Access Switch Lantai 2 (VLAN 20, 40, 99)' : 'Floor 2 Access Switch (VLAN 20, 40, 99)' },
      { name: 'SRV-SIMPUS', model: 'Server-PT', role: isId ? 'Web Server SIMPUS & DNS Internal (10.10.30.10)' : 'SIMPUS Web Server & Internal DNS (10.10.30.10)' },
      { name: 'SRV-IOT', model: 'Server-PT', role: isId ? 'IoT CCTV Registration Server — cctv.puskesmas.local (10.10.30.20)' : 'IoT CCTV Registration Server — cctv.puskesmas.local (10.10.30.20)' },
      { name: 'CCTV-KORIDOR2 & GUDANG', model: 'Webcam (IoT)', role: isId ? 'Kamera keamanan koridor lantai 2 & gudang obat (VLAN 40)' : 'Floor 2 corridor & medicine storage security cameras (VLAN 40)' },
    ]},
    { zone: isId ? 'Lantai 1 — Pelayanan Medis & Publik' : 'Floor 1 — Medical Services & Public', devices: [
      { name: 'SW-LT1', model: 'Switch 2960-24TT', role: isId ? 'Access Switch Lantai 1 (VLAN 10, 40, 50 + Port Security)' : 'Floor 1 Access Switch (VLAN 10, 40, 50 + Port Security)' },
      { name: 'PC-LOKET, PC-POLI, PC-IGD, PC-FARMASI', model: 'PC-PT', role: isId ? 'Workstation pelayanan medis & pendaftaran (VLAN 10)' : 'Medical service & registration workstations (VLAN 10)' },
      { name: 'AP-GUEST', model: 'AccessPoint-PT', role: isId ? 'Wi-Fi ruang tunggu pasien (SSID: Puskesmas-Guest, VLAN 50, terisolasi ACL)' : 'Patient waiting room Wi-Fi (SSID: Puskesmas-Guest, VLAN 50, ACL-isolated)' },
      { name: 'CCTV-TUNGGU & PARKIR', model: 'Webcam (IoT)', role: isId ? 'Kamera keamanan area ruang tunggu & parkir (VLAN 40)' : 'Waiting area & parking lot security cameras (VLAN 40)' },
    ]},
  ];

  const testResults = [
    {
      no: 1,
      title: isId ? 'Akses SIMPUS & Bridging PCare BPJS (NAT)' : 'SIMPUS Access & PCare BPJS Bridging (NAT)',
      desc: isId
        ? 'PC-POLI-UMUM mengakses simpus.puskesmas.local & pcare.bpjs.go.id via browser. show ip nat translations di R-EDGE menampilkan translasi 10.10.10.x → 203.0.113.2 ke 202.100.1.10:80'
        : 'PC-POLI-UMUM accessed simpus.puskesmas.local & pcare.bpjs.go.id via browser. show ip nat translations on R-EDGE confirmed NAT 10.10.10.x → 203.0.113.2 to 202.100.1.10:80',
      status: 'LULUS',
      type: 'success',
    },
    {
      no: 2,
      title: isId ? 'Monitoring CCTV Lintas Lantai' : 'Cross-Floor CCTV Monitoring',
      desc: isId
        ? 'PC-KAPUS login ke cctv.puskesmas.local (10.10.30.20). 4 unit kamera (Lt. 1 & Lt. 2) berstatus aktif dan dapat dikontrol dari satu dashboard.'
        : 'PC-KAPUS logged in to cctv.puskesmas.local (10.10.30.20). All 4 cameras (Floor 1 & 2) were active and controllable from a single dashboard.',
      status: 'LULUS',
      type: 'success',
    },
    {
      no: 3,
      title: isId ? 'Isolasi ACL Wi-Fi Pasien (Guest)' : 'Patient Wi-Fi ACL Isolation (Guest)',
      desc: isId
        ? 'HP-PASIEN (VLAN 50) berhasil membuka pcare.bpjs.go.id, namun seluruh ping ke 10.10.30.10, .20, 10.10.10.1 gagal. Counter matches pada baris deny di show access-lists ACL-GUEST-ISOLASI bertambah.'
        : 'HP-PASIEN (VLAN 50) successfully opened pcare.bpjs.go.id, but all pings to 10.10.30.10, .20, 10.10.10.1 failed. ACL-GUEST-ISOLASI deny match counter incremented correctly.',
      status: 'LULUS',
      type: 'shield',
    },
    {
      no: 4,
      title: isId ? 'Remote Manajemen SSHv2 dari VLAN 99' : 'SSHv2 Remote Management from VLAN 99',
      desc: isId
        ? 'PC-ADMIN-IT (10.10.99.10) menjalankan ssh -l admin ke 10.10.99.2, .3, .1, dan 10.10.255.1. Berhasil login terenkripsi ke SW-LT1, SW-LT2, MLS-CORE, dan R-EDGE.'
        : 'PC-ADMIN-IT (10.10.99.10) ran ssh -l admin to 10.10.99.2, .3, .1, and 10.10.255.1. Successfully authenticated via encrypted SSH to SW-LT1, SW-LT2, MLS-CORE, and R-EDGE.',
      status: 'LULUS',
      type: 'success',
    },
    {
      no: 5,
      title: isId ? 'Proteksi Port Security Loket (Anti Rogue Device)' : 'Registration Counter Port Security (Anti Rogue Device)',
      desc: isId
        ? 'Setelah MAC PC-LOKET terekam sticky pada Fa0/1 SW-LT1, laptop asing dicolokkan. Port otomatis masuk status Secure-shutdown (err-disabled). Violation Count: 1 terkonfirmasi via show port-security interface Fa0/1.'
        : 'After PC-LOKET MAC was learned sticky on Fa0/1 of SW-LT1, a foreign laptop was connected. Port automatically entered Secure-shutdown (err-disabled). Violation Count: 1 confirmed via show port-security interface Fa0/1.',
      status: isId ? 'LULUS / TERLINDUNGI' : 'PASS / PROTECTED',
      type: 'shield',
    },
  ];

  return (
    <div className="case-study-page">
      {/* Sticky Navigation Bar */}
      <nav className="case-nav">
        <div className="case-nav-container">
          <button type="button" onClick={onBack} className="case-back-btn">
            <ArrowLeft size={18} />
            <span>{t.back}</span>
          </button>

          <div className="case-nav-brand">
            <span className="brand-dot-pulse"></span>
            <strong>{content.personalInfo.brandName || 'ARFID'}</strong>
            <span className="brand-sep">/</span>
            <span className="case-nav-crumb">Cisco Network Case Study</span>
          </div>

          <div className="case-nav-actions">
            <div className="lang-toggle-mini">
              <button type="button" className={`lang-btn ${language === 'id' ? 'active' : ''}`} onClick={() => setLanguage('id')}>ID</button>
              <button type="button" className={`lang-btn ${language === 'en' ? 'active' : ''}`} onClick={() => setLanguage('en')}>EN</button>
            </div>
            <a href="#contact" onClick={onBack} className="case-nav-cta">{t.ctaBtn}</a>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="case-hero">
        <div className="case-container">
          <div className="case-hero-badge">
            <Shield size={14} />
            <span>{t.caseBadge}</span>
          </div>
          <h1 className="case-hero-title">{t.title}</h1>
          <p className="case-hero-subtitle">{t.subtitle}</p>

          <div className="case-meta-grid">
            <div className="case-meta-item"><span className="meta-label">{isId ? 'Penyusun' : 'Author'}</span><strong className="meta-value">Achmad Arif Hidayat</strong></div>
            <div className="case-meta-item"><span className="meta-label">Platform</span><strong className="meta-value">Cisco Packet Tracer</strong></div>
            <div className="case-meta-item"><span className="meta-label">{isId ? 'Arsitektur' : 'Architecture'}</span><strong className="meta-value">Hierarchical Core–Access (MLS L3 + Edge WAN)</strong></div>
            <div className="case-meta-item"><span className="meta-label">{isId ? 'Skala Topologi' : 'Topology Scope'}</span><strong className="meta-value">2 Lantai HQ + ISP/BPJS WAN Link</strong></div>
          </div>

          <div className="case-tags-cluster">
            {['802.1Q VLAN Trunking', 'Inter-VLAN SVI', 'DHCP Split-DNS', 'NAT Overload (PAT)', 'Extended ACL', 'Port Security', 'SSHv2', 'IoT CCTV Monitoring', 'Static Routing'].map(tag => (
              <span key={tag} className="case-tech-chip">{tag}</span>
            ))}
          </div>
        </div>
      </header>

      {/* SECTION 1: Latar Belakang & Tantangan */}
      <section className="case-section case-section-highlight">
        <div className="case-container">
          <div className="section-head">
            <div className="section-tag-pill"><Building size={14} /><span>Problem Statement</span></div>
            <h2 className="section-heading">{t.overview}</h2>
            <p className="section-desc">{t.challengesDesc}</p>
          </div>
          <div className="challenges-grid">
            <div className="challenge-card">
              <div className="challenge-icon-box" style={{ background: '#fef3c7', color: '#d97706' }}><Layers size={24} /></div>
              <h3 className="challenge-title">{t.ch1Title}</h3>
              <p className="challenge-text">{t.ch1Desc}</p>
              <div className="challenge-solution-tag"><span>{isId ? 'Solusi:' : 'Solution:'}</span> {t.ch1Sol.replace(isId ? 'Solusi: ' : 'Solution: ', '')}</div>
            </div>
            <div className="challenge-card">
              <div className="challenge-icon-box" style={{ background: '#dcfce7', color: '#16a34a' }}><Globe size={24} /></div>
              <h3 className="challenge-title">{t.ch2Title}</h3>
              <p className="challenge-text">{t.ch2Desc}</p>
              <div className="challenge-solution-tag"><span>{isId ? 'Solusi:' : 'Solution:'}</span> {t.ch2Sol.replace(isId ? 'Solusi: ' : 'Solution: ', '')}</div>
            </div>
            <div className="challenge-card">
              <div className="challenge-icon-box" style={{ background: '#fee2e2', color: '#dc2626' }}><Lock size={24} /></div>
              <h3 className="challenge-title">{t.ch3Title}</h3>
              <p className="challenge-text">{t.ch3Desc}</p>
              <div className="challenge-solution-tag"><span>{isId ? 'Solusi:' : 'Solution:'}</span> {t.ch3Sol.replace(isId ? 'Solusi: ' : 'Solution: ', '')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Diagram Topologi */}
      <section className="case-section">
        <div className="case-container">
          <div className="section-head">
            <div className="section-tag-pill"><Network size={14} /><span>Network Blueprint</span></div>
            <h2 className="section-heading">{t.topologyTitle}</h2>
            <p className="section-desc">{t.topologySubtitle}</p>
          </div>
          <div className="topology-card" onClick={() => setIsLightboxOpen(true)}>
            <div className="topology-image-wrapper">
              <img src="/projects/cisco-topology.PNG" alt="Puskesmas Network Topology Diagram" className="topology-img" />
              <div className="topology-overlay-banner">
                <div className="zoom-btn-pill"><ZoomIn size={16} /><span>{t.clickToZoom}</span></div>
              </div>
            </div>
            <div className="topology-legend-bar">
              {[
                { color: '#3b82f6', label: 'VLAN 10: Medis (Loket, Poli, IGD, Farmasi)' },
                { color: '#10b981', label: 'VLAN 20: Manajemen (Kapus, TU, Staff)' },
                { color: '#8b5cf6', label: 'VLAN 30: Server (SIMPUS & IoT)' },
                { color: '#f59e0b', label: 'VLAN 40: CCTV IoT (4 Kamera)' },
                { color: '#ec4899', label: 'VLAN 50: Guest (Wi-Fi Pasien)' },
                { color: '#64748b', label: 'VLAN 99: Native MGMT (SSHv2)' },
              ].map(l => (
                <div key={l.label} className="legend-item">
                  <span className="legend-dot" style={{ background: l.color }}></span>
                  <span>{l.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Inventaris Perangkat */}
      <section className="case-section case-section-highlight">
        <div className="case-container">
          <div className="section-head">
            <div className="section-tag-pill"><Server size={14} /><span>Device Inventory</span></div>
            <h2 className="section-heading">{t.inventoryTitle}</h2>
          </div>
          <div className="inventory-zones">
            {deviceInventory.map((zone, zi) => (
              <div key={zi} className="inventory-zone-card">
                <div className="inventory-zone-header">
                  <Building size={16} />
                  <strong>{zone.zone}</strong>
                </div>
                <div className="inventory-devices">
                  {zone.devices.map((d, di) => (
                    <div key={di} className="inventory-device-row">
                      <div className="device-name-col">
                        <code>{d.name}</code>
                        <span className="device-model-badge">{d.model}</span>
                      </div>
                      <div className="device-role-col">{d.role}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Skema VLAN & IP */}
      <section className="case-section">
        <div className="case-container">
          <div className="section-head">
            <div className="section-tag-pill"><Layers size={14} /><span>IP Architecture</span></div>
            <h2 className="section-heading">{t.addressingTitle}</h2>
            <p className="section-desc">{t.addressingSubtitle}</p>
          </div>
          <div className="table-responsive-box">
            <table className="case-table">
              <thead>
                <tr>
                  <th>Segmen / VLAN</th>
                  <th>Nama</th>
                  <th>Network ID</th>
                  <th>Gateway (SVI)</th>
                  <th>Alokasi IP & DNS</th>
                </tr>
              </thead>
              <tbody>
                {addressingData.map((row, idx) => (
                  <tr key={idx}>
                    <td><span className="vlan-badge" style={{ backgroundColor: `${row.color}18`, color: row.color, borderColor: `${row.color}40` }}>{row.vlan}</span></td>
                    <td><strong>{row.name}</strong></td>
                    <td><code>{row.subnet}</code></td>
                    <td><code>{row.gateway}</code></td>
                    <td><small>{row.alloc} {row.dns !== '—' && <><br /><span style={{ color: '#64748b' }}>DNS: {row.dns}</span></>}</small></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 5: CLI Showcase */}
      <section className="case-section case-section-highlight">
        <div className="case-container">
          <div className="section-head">
            <div className="section-tag-pill"><Terminal size={14} /><span>Implementation</span></div>
            <h2 className="section-heading">{t.cliTitle}</h2>
            <p className="section-desc">{t.cliSubtitle}</p>
          </div>
          <div className="cli-showcase-box">
            <div className="cli-tabs-header">
              {([
                { key: 'mls-svi', icon: <Cpu size={15} />, label: 'Inter-VLAN (MLS & SVI)' },
                { key: 'nat-routing', icon: <Globe size={15} />, label: 'NAT Overload & Routing' },
                { key: 'acl-ssh', icon: <Shield size={15} />, label: 'Extended ACL & SSHv2' },
                { key: 'port-sec', icon: <Lock size={15} />, label: 'Port Security Hardening' },
              ] as { key: 'mls-svi' | 'nat-routing' | 'acl-ssh' | 'port-sec'; icon: React.ReactNode; label: string }[]).map(tab => (
                <button
                  key={tab.key}
                  type="button"
                  className={`cli-tab-btn ${activeTab === tab.key ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
            <div className="cli-terminal-window">
              <div className="terminal-topbar">
                <div className="terminal-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="terminal-title">
                  cisco-ios-terminal &bull; {activeTab === 'mls-svi' ? 'mls-core-svi.cfg' : activeTab === 'nat-routing' ? 'r-edge-nat.cfg' : activeTab === 'acl-ssh' ? 'mls-core-security.cfg' : 'sw-lt1-access.cfg'}
                </div>
                <button
                  type="button"
                  className="copy-cli-btn"
                  onClick={() => handleCopy(activeTab, cliSnippets[activeTab])}
                >
                  {copiedTab === activeTab ? <><Check size={14} /><span>{isId ? 'Disalin!' : 'Copied!'}</span></> : <><Copy size={14} /><span>{isId ? 'Salin CLI' : 'Copy CLI'}</span></>}
                </button>
              </div>
              <pre className="terminal-code"><code>{cliSnippets[activeTab]}</code></pre>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Matriks Pengujian */}
      <section className="case-section">
        <div className="case-container">
          <div className="section-head">
            <div className="section-tag-pill"><CheckCircle2 size={14} /><span>Verification Matrix</span></div>
            <h2 className="section-heading">{t.testingTitle}</h2>
            <p className="section-desc">{t.testingSubtitle}</p>
          </div>
          <div className="tests-list">
            {testResults.map((test) => (
              <div key={test.no} className="test-card-row">
                <div className="test-no">{test.no}</div>
                <div className="test-content">
                  <div className="test-card-header">
                    <h4 className="test-title">{test.title}</h4>
                    <div className={`test-status-pill ${test.type === 'shield' ? 'status-shield' : 'status-pass'}`}>
                      {test.type === 'shield' ? <Shield size={12} /> : <CheckCircle2 size={12} />}
                      <span>{test.status}</span>
                    </div>
                  </div>
                  <p className="test-desc">{test.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Download */}
      <section className="case-section case-section-highlight">
        <div className="case-container">
          <div className="download-cta-card">
            <div className="download-content">
              <div className="section-tag-pill" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>
                <Download size={14} /><span>Lab Deliverables</span>
              </div>
              <h2 className="download-title">{t.downloadTitle}</h2>
              <p className="download-desc">{t.downloadSubtitle}</p>
              <div className="download-buttons-group">
                <a href="/downloads/cisco-topology.pkt" download className="download-btn-primary">
                  <Download size={18} />
                  <span>{isId ? 'Unduh Topologi (.pkt)' : 'Download Topology (.pkt)'}</span>
                </a>
              </div>
            </div>
            <div className="download-side-box">
              <div className="quick-specs-box">
                <h4>System Requirements</h4>
                <ul>
                  <li>Cisco Packet Tracer v8.2.0+</li>
                  <li>Router 2911 (IOS 15.1 M&T)</li>
                  <li>Switch Catalyst 3560-24PS (Core)</li>
                  <li>Switch Catalyst 2960-24TT (Access)</li>
                  <li>IoT Webcam + Server-PT</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="case-footer-action">
            <button type="button" onClick={onBack} className="case-return-btn">
              <ArrowLeft size={18} /><span>{t.back}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="lightbox-overlay" onClick={() => setIsLightboxOpen(false)}>
          <button type="button" className="lightbox-close-btn" onClick={() => setIsLightboxOpen(false)} aria-label="Tutup">
            <X size={26} />
          </button>
          <div className="lightbox-dialog" onClick={(e) => e.stopPropagation()}>
            <img src="/projects/cisco-topology.PNG" alt="Puskesmas Network Topology — Full Resolution" className="lightbox-img" />
            <div className="lightbox-caption">
              <h4>{t.topologyTitle}</h4>
              <span>Cisco Packet Tracer — Full Topology Resolution</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
