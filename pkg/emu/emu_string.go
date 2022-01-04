// Code generated by "stringer -type=interrupt,branchType -output emu_string.go"; DO NOT EDIT.

package emu

import "strconv"

func _() {
	// An "invalid array index" compiler error signifies that the constant values have changed.
	// Re-run the stringer command to generate them again.
	var x [1]struct{}
	_ = x[EXCP_UNDEFINED_INSTRUCTION-1]
	_ = x[EXCP_SOFTWARE_INTRPT-2]
	_ = x[EXCP_PREFETCH_ABORT-3]
	_ = x[EXCP_DATA_ABORT-4]
	_ = x[EXCP_IRQ-5]
	_ = x[EXCP_FIQ-6]
	_ = x[EXCP_BKPT-7]
	_ = x[EXCP_EXCEPTION_EXIT-8]
	_ = x[EXCP_KERNEL_TRAP-9]
	_ = x[EXCP_HVC-11]
	_ = x[EXCP_HYP_TRAP-12]
	_ = x[EXCP_SMC-13]
	_ = x[EXCP_VIRQ-14]
	_ = x[EXCP_VFIQ-15]
	_ = x[EXCP_SEMIHOST-16]
	_ = x[EXCP_NOCP-17]
	_ = x[EXCP_INVSTATE-18]
	_ = x[EXCP_STKOF-19]
	_ = x[EXCP_LAZYFP-20]
	_ = x[EXCP_LSERR-21]
	_ = x[EXCP_UNALIGNED-22]
}

const (
	_interrupt_name_0 = "EXCP_UNDEFINED_INSTRUCTIONEXCP_SOFTWARE_INTRPTEXCP_PREFETCH_ABORTEXCP_DATA_ABORTEXCP_IRQEXCP_FIQEXCP_BKPTEXCP_EXCEPTION_EXITEXCP_KERNEL_TRAP"
	_interrupt_name_1 = "EXCP_HVCEXCP_HYP_TRAPEXCP_SMCEXCP_VIRQEXCP_VFIQEXCP_SEMIHOSTEXCP_NOCPEXCP_INVSTATEEXCP_STKOFEXCP_LAZYFPEXCP_LSERREXCP_UNALIGNED"
)

var (
	_interrupt_index_0 = [...]uint8{0, 26, 46, 65, 80, 88, 96, 105, 124, 140}
	_interrupt_index_1 = [...]uint8{0, 8, 21, 29, 38, 47, 60, 69, 82, 92, 103, 113, 127}
)

func (i interrupt) String() string {
	switch {
	case 1 <= i && i <= 9:
		i -= 1
		return _interrupt_name_0[_interrupt_index_0[i]:_interrupt_index_0[i+1]]
	case 11 <= i && i <= 22:
		i -= 11
		return _interrupt_name_1[_interrupt_index_1[i]:_interrupt_index_1[i+1]]
	default:
		return "interrupt(" + strconv.FormatInt(int64(i), 10) + ")"
	}
}
func _() {
	// An "invalid array index" compiler error signifies that the constant values have changed.
	// Re-run the stringer command to generate them again.
	var x [1]struct{}
	_ = x[DIRCALL-0]
	_ = x[INDCALL-1]
	_ = x[ERET-2]
	_ = x[DBGEXIT-3]
	_ = x[RET-4]
	_ = x[DIR-5]
	_ = x[INDIR-6]
	_ = x[EXCEPTION-7]
	_ = x[RESET-8]
	_ = x[UNKNOWN-9]
}

const _branchType_name = "DIRCALLINDCALLERETDBGEXITRETDIRINDIREXCEPTIONRESETUNKNOWN"

var _branchType_index = [...]uint8{0, 7, 14, 18, 25, 28, 31, 36, 45, 50, 57}

func (i branchType) String() string {
	if i >= branchType(len(_branchType_index)-1) {
		return "branchType(" + strconv.FormatInt(int64(i), 10) + ")"
	}
	return _branchType_name[_branchType_index[i]:_branchType_index[i+1]]
}
