"use client";
import { Box, Typography, Link } from "@mui/material";

const FooterSection = ({ title, items }) => (
  <Box
    sx={{ flex: 1, marginBottom: { xs: "20px", md: 0 }, textAlign: "center" }}
  >
    <Typography variant="h6" sx={{ fontWeight: 700 }}>
      {title}
    </Typography>
    {items.map((item, index) => (
      <Typography
        variant="body2"
        key={index}
        sx={{ marginTop: "10px" }}
        fontWeight={700}
        fontSize={16}
      >
        {item}
      </Typography>
    ))}
  </Box>
);

const Footer = () => {
  const infoItems = ["Про нас", "Донат", "Новини", "Блог", "Наша місія"];

  const contactItems = [
    "Телефони:",
    "+38 (097) xxx xx xx",
    "+38 (097) xxx xx xx",
    "Юридична адреса:",
    "вул. Притулок, м. Київ",
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#F4F5F6",
        padding: "40px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        marginTop: "auto",
      }}
    >
      <FooterSection title="Інформація" items={infoItems} />
      <Box
        sx={{
          flex: 1,
          textAlign: "center",
          marginBottom: { xs: "20px", md: 0 },
        }}
      >
        <Typography variant="body2" sx={{ marginBottom: "10px" }}>
          Всі офіційні донати збори LАПКА ми публікуємо на цьому сайті. Ми не
          несемо відповідальності за збори інших людей чи організацій на нашу
          підтримку, опубліковані на сторонніх платформах.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ©2025
        </Typography>
      </Box>
      <FooterSection title="Контакти" items={contactItems} />
    </Box>
  );
};

export default Footer;
