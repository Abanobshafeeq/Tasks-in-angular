export interface GalleryItem {
  type: 'image' | 'video'; 
  src: string;            
  alt: string;
  cols?: number;  
  rows?: number;          
  badge?: string;          
   
}