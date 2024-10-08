import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { PhoneNumberService } from 'app/shared/services/phone-number.service';
import { KnowledgeBaseComponent } from './knowledge-base.component';


describe('KnowledgeBaseComponent', () => {
  let component: KnowledgeBaseComponent;
  let service: PhoneNumberService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ToastrModule.forRoot(),
        KnowledgeBaseComponent // Import the standalone component here
      ]
    }).compileComponents();

    service = TestBed.inject(PhoneNumberService);

    // Create the component instance
    const fixture = TestBed.createComponent(KnowledgeBaseComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // Add additional tests as needed
});
