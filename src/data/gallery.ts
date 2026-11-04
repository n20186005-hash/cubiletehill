// Galería de la ficha pública de Google Maps del Cerro del Cubilete.
// Los títulos son numerados y neutrales: no se identifica el contenido de cada toma
// ni se afirma su fecha o que muestre las condiciones actuales de los accesos.

const photoFiles = [
  'ANWiy9QnCir6Egg5ll_qHgOdv0hii4IrsIiXVCMxSTu8S8OKrEkzyib3_nVa1uAtbKMBx0w9OX_rmOhRDMt5Tgyuw9zZQf3LyR-V6XBK08OQvdL7BXVJUX4LikKL1hnsw5Anbp77xf2FkHiNw18v=s0.jpg',
  'ANWiy9RFJkugdR_trkfDV-r0xlwRw2u5VXXMwFUM2ZSaq0vIYs5Hqna7Teci6UiNLMbBXizJZjjW0kHDew9LOwmpuuXzLpCW7-regUbWNbG_TXlY7dqKliYbMgqARjXwuziOGCY2RbLMbBMJx5QP=s0.jpg',
  'ANWiy9RFZBYUVliAjuU1EpNXPSEJyZQQ9eEQ0GlAnu66sR1msZRzhbp9mhjW51q6yPpET617JS03e8XDiWvYKZJKEERFGIKNf8fkf19mpWntk5iY2iApu8rNJUBRjS719-8fdpRPecOWdW74bSmS=s0.jpg',
  'ANWiy9RYO7ZuvU8HsRpknJn6a3BR_3DLbJYprYH7c22J89T9fvfoh55BTBPIaH9zpKYn1s3Gu_Xtb1vNaJRP7vmmF0jeThQzmQS_oKT4_QiK3QY8DqlGviMMUc7-ejX1hAffGYVfce9XkG1xNMFh=s0.jpg',
  'ANWiy9SAD3DoMy1M_-MR9wNDltzSSbzzRhrEJ93EwTiO4DlLsd3cGPDJ-HwxEDzaDQFHSa8tjSBlKFg7oyQy3RmOFTDYnaQGwwzJp3EbURrEGASHD5aI2SBXHA8KrHofQ7K6CLTHmJgT_0Wf1nM=s0.jpg',
  'ANWiy9SYYo2Fm4zYgSWmuub9nCc0cXzKpKLviWlKYohMHczaFwXf5Roi48LZBP2NvPd5OkyrtNDFN0Dn78oJH0oGB_ll3r2SHcYH4A_t9L4MemPmy7r8IphICE9kt2gi2nheItu2DCfE=s0.jpg',
  'ANWiy9SlI1CtpmeFW1R3hPMswVTC6xJNiPaxYIwE59ERnTLqDKwpnfjTPqO_GsTxl3buIkKZ2glNdmCa1xUEAmrxv7mvigNs61WB7h4aMqN8DWBwBd4XDkvksv7XA0wCOfoj9-NC8vfg1ebYSlUo=s0.jpg',
  'ANWiy9SlulR4cEei9CHhttkUPIQFL8HhlsNi-XCDRYOXauNinzIf9ocSrmr37YFA0a037AlOnMVeYWdTiuXfNVQRQkldZ1YaPRzVSr8oD3YfSt__EifVhToqNINDkC_YwxNjsFu8USmUPBF9k6DT=s0.jpg',
  'ANWiy9Snhlbcr1cAqQJGZ47MKtl165XtcEH7UcnLxzXbv0ZOempRq_Lm0uLWFj67-2II8THMvnBLW1mGRJXJltvFLDEgkyEeyEq0iwADsmffsIu6__rjz8AGZkXegH3iNNekl6j3nos=s0.jpg',
  'ANWiy9Sy69e4HVsDDO8uCLgwAxP5whdt8kNFR3hyxpX8-kY169swy0qiXLiCmYBe7CzNFLs1dUmUnHt2QXa9eTKTkbBmXRuYH0vee75gdTCOXNGSTuTIFXrDMFjLDdB0rHHZCHPEgw=s0.jpg',
  'ANWiy9Taz957wYag0FO-D3C3gExUvz0X0HA3mUYLFf0PcGe344aK325GP1jNedqtFJGlcseRi9VY9xT8m3qd-_82nZV1pCZnGaJdbraGqI-Se81R0nSHiqnHH2rCdkm1vCSs61ca4t_tVrynQRg=s0.jpg',
  'ANWiy9TbD2vu-1IBIU1HwyCb2vOHprELcAiAxYr2TlJghKizzZFqIA7pEE9YYO_trDpZ9Hg5kiHTQwEbQXILg7a_VLntSuSussDU7ws6PKUOiIPIGKOuL0fk368KJ2yy2Q2WYs3Q7O1JYzvUztY=s0.jpg'
];

export type GalleryPhoto = {
  src: string;
  title: string;
  alt: string;
};

export const galleryPhotos: GalleryPhoto[] = photoFiles.map((file, index) => {
  const number = String(index + 1).padStart(2, '0');
  return {
    src: `/images/${file}`,
    title: `Fotografía ${number}`,
    alt: `Fotografía ${number} de la galería de la ficha pública de Google Maps sobre el Cerro del Cubilete`
  };
});
