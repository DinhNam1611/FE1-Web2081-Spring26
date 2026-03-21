import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/IProduct';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  products: IProduct[] = [];
  loading = false;
  error = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts () {
    this.loading = true;
    this.error = '';

    this.http.get<IProduct[]>('http://localhost:3000/products').subscribe({
      next: (data : IProduct[]) => {
        this.loading = false;
        this.products = data;
      },
      error: () => {
        this.loading = false;
        this.error = 'Co loi xay ra';
      },
    })
  };

  deleteProduct(id : number) {
    const fomfirmDelete = confirm("Ban co chac muon xoa san pham nay khong?");
    if (!fomfirmDelete) {
      return;
    }

    this.http.delete(`http://localhost:3000/products/${id}`).subscribe({
      next: () => {
        this.getProducts();
        alert("Xoa san pham thanh cong");
      },
      error: () => {
        alert("Co loi xay ra khi xoa san pham");
      }
    });
  }
}
