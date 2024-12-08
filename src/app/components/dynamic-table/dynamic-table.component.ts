import {
  ChangeDetectionStrategy,
  Component,
  input,
  model,
} from '@angular/core';
import {
  ColumnDef,
  createAngularTable,
  FlexRenderDirective,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getGroupedRowModel,
  getPaginationRowModel,
  PaginationState,
} from '@tanstack/angular-table';
@Component({
  selector: 'app-dynamic-table',
  imports: [FlexRenderDirective],
  templateUrl: './dynamic-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicTableComponent<T extends object = object> {
  readonly data = input.required<T[]>();
  readonly pagination = model.required<PaginationState>();
  readonly columns = input.required<ColumnDef<T>[]>();
  table = createAngularTable(() => {
    return {
      data: this.data(),
      columns: this.columns(),
      state: {
        pagination: this.pagination(),
      },
      onPaginationChange: (updaterOrValue) => {
        typeof updaterOrValue === 'function'
          ? this.pagination.update(updaterOrValue)
          : this.pagination.set(updaterOrValue);
      },
      getExpandedRowModel: getExpandedRowModel(),
      getGroupedRowModel: getGroupedRowModel(),
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      debugTable: true,
    };
  });
  onPageInputChange(event: any): void {
    const page = event.target.value ? Number(event.target.value) - 1 : 0;
    this.table.setPageIndex(page);
  }
  onPageSizeChange(event: any) {
    this.table.setPageSize(Number(event.target.value));
  }
}
