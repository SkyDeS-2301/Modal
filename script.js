const btnModal = document.querySelector( '.btn-modal' );
const btnClose = document.querySelector( '.close' );
const modal = document.querySelector( '.modal' );

function openModal() {
	modal.classList.remove( 'hide' )
	modal.classList.add( 'show' )
}

btnModal.addEventListener( 'click', openModal )

function closeModal() {
	modal.classList.remove( 'show' )
	modal.classList.add( 'hide' )
}

btnClose.addEventListener( 'click', closeModal )

document.addEventListener('click', (e) => {
	const t = e.target;
	if (t.classList.contains('modal')) {
		closeModal()
	}
})