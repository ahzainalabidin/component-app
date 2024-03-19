import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {

    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button primary onClick={handleClose}>I accept</Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>Here is an important agreement for you to accept</p>
        </Modal>
    );

    return (
        <div className="relative">

            <Button primary onClick={handleClick}>Open Modal</Button>
            {showModal && modal}

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et placerat tellus, at malesuada felis. Nunc in volutpat est. Maecenas porta euismod felis. Etiam commodo risus ac enim ultrices iaculis. Integer vulputate ultrices lacus at varius. Mauris condimentum ligula et auctor molestie. Etiam mauris nunc, tristique euismod nulla ut, aliquet fermentum lacus. Suspendisse accumsan ipsum quam, venenatis mollis diam iaculis at. Proin molestie nunc velit, a molestie metus elementum ut. Pellentesque in egestas magna, sit amet accumsan eros. Praesent et ultricies nisi, nec semper turpis. Donec vel nisl a sapien accumsan vehicula. Nunc nulla elit, dignissim et sem eget, porta cursus felis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et placerat tellus, at malesuada felis. Nunc in volutpat est. Maecenas porta euismod felis. Etiam commodo risus ac enim ultrices iaculis. Integer vulputate ultrices lacus at varius. Mauris condimentum ligula et auctor molestie. Etiam mauris nunc, tristique euismod nulla ut, aliquet fermentum lacus. Suspendisse accumsan ipsum quam, venenatis mollis diam iaculis at. Proin molestie nunc velit, a molestie metus elementum ut. Pellentesque in egestas magna, sit amet accumsan eros. Praesent et ultricies nisi, nec semper turpis. Donec vel nisl a sapien accumsan vehicula. Nunc nulla elit, dignissim et sem eget, porta cursus felis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et placerat tellus, at malesuada felis. Nunc in volutpat est. Maecenas porta euismod felis. Etiam commodo risus ac enim ultrices iaculis. Integer vulputate ultrices lacus at varius. Mauris condimentum ligula et auctor molestie. Etiam mauris nunc, tristique euismod nulla ut, aliquet fermentum lacus. Suspendisse accumsan ipsum quam, venenatis mollis diam iaculis at. Proin molestie nunc velit, a molestie metus elementum ut. Pellentesque in egestas magna, sit amet accumsan eros. Praesent et ultricies nisi, nec semper turpis. Donec vel nisl a sapien accumsan vehicula. Nunc nulla elit, dignissim et sem eget, porta cursus felis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et placerat tellus, at malesuada felis. Nunc in volutpat est. Maecenas porta euismod felis. Etiam commodo risus ac enim ultrices iaculis. Integer vulputate ultrices lacus at varius. Mauris condimentum ligula et auctor molestie. Etiam mauris nunc, tristique euismod nulla ut, aliquet fermentum lacus. Suspendisse accumsan ipsum quam, venenatis mollis diam iaculis at. Proin molestie nunc velit, a molestie metus elementum ut. Pellentesque in egestas magna, sit amet accumsan eros. Praesent et ultricies nisi, nec semper turpis. Donec vel nisl a sapien accumsan vehicula. Nunc nulla elit, dignissim et sem eget, porta cursus felis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et placerat tellus, at malesuada felis. Nunc in volutpat est. Maecenas porta euismod felis. Etiam commodo risus ac enim ultrices iaculis. Integer vulputate ultrices lacus at varius. Mauris condimentum ligula et auctor molestie. Etiam mauris nunc, tristique euismod nulla ut, aliquet fermentum lacus. Suspendisse accumsan ipsum quam, venenatis mollis diam iaculis at. Proin molestie nunc velit, a molestie metus elementum ut. Pellentesque in egestas magna, sit amet accumsan eros. Praesent et ultricies nisi, nec semper turpis. Donec vel nisl a sapien accumsan vehicula. Nunc nulla elit, dignissim et sem eget, porta cursus felis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et placerat tellus, at malesuada felis. Nunc in volutpat est. Maecenas porta euismod felis. Etiam commodo risus ac enim ultrices iaculis. Integer vulputate ultrices lacus at varius. Mauris condimentum ligula et auctor molestie. Etiam mauris nunc, tristique euismod nulla ut, aliquet fermentum lacus. Suspendisse accumsan ipsum quam, venenatis mollis diam iaculis at. Proin molestie nunc velit, a molestie metus elementum ut. Pellentesque in egestas magna, sit amet accumsan eros. Praesent et ultricies nisi, nec semper turpis. Donec vel nisl a sapien accumsan vehicula. Nunc nulla elit, dignissim et sem eget, porta cursus felis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et placerat tellus, at malesuada felis. Nunc in volutpat est. Maecenas porta euismod felis. Etiam commodo risus ac enim ultrices iaculis. Integer vulputate ultrices lacus at varius. Mauris condimentum ligula et auctor molestie. Etiam mauris nunc, tristique euismod nulla ut, aliquet fermentum lacus. Suspendisse accumsan ipsum quam, venenatis mollis diam iaculis at. Proin molestie nunc velit, a molestie metus elementum ut. Pellentesque in egestas magna, sit amet accumsan eros. Praesent et ultricies nisi, nec semper turpis. Donec vel nisl a sapien accumsan vehicula. Nunc nulla elit, dignissim et sem eget, porta cursus felis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et placerat tellus, at malesuada felis. Nunc in volutpat est. Maecenas porta euismod felis. Etiam commodo risus ac enim ultrices iaculis. Integer vulputate ultrices lacus at varius. Mauris condimentum ligula et auctor molestie. Etiam mauris nunc, tristique euismod nulla ut, aliquet fermentum lacus. Suspendisse accumsan ipsum quam, venenatis mollis diam iaculis at. Proin molestie nunc velit, a molestie metus elementum ut. Pellentesque in egestas magna, sit amet accumsan eros. Praesent et ultricies nisi, nec semper turpis. Donec vel nisl a sapien accumsan vehicula. Nunc nulla elit, dignissim et sem eget, porta cursus felis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et placerat tellus, at malesuada felis. Nunc in volutpat est. Maecenas porta euismod felis. Etiam commodo risus ac enim ultrices iaculis. Integer vulputate ultrices lacus at varius. Mauris condimentum ligula et auctor molestie. Etiam mauris nunc, tristique euismod nulla ut, aliquet fermentum lacus. Suspendisse accumsan ipsum quam, venenatis mollis diam iaculis at. Proin molestie nunc velit, a molestie metus elementum ut. Pellentesque in egestas magna, sit amet accumsan eros. Praesent et ultricies nisi, nec semper turpis. Donec vel nisl a sapien accumsan vehicula. Nunc nulla elit, dignissim et sem eget, porta cursus felis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et placerat tellus, at malesuada felis. Nunc in volutpat est. Maecenas porta euismod felis. Etiam commodo risus ac enim ultrices iaculis. Integer vulputate ultrices lacus at varius. Mauris condimentum ligula et auctor molestie. Etiam mauris nunc, tristique euismod nulla ut, aliquet fermentum lacus. Suspendisse accumsan ipsum quam, venenatis mollis diam iaculis at. Proin molestie nunc velit, a molestie metus elementum ut. Pellentesque in egestas magna, sit amet accumsan eros. Praesent et ultricies nisi, nec semper turpis. Donec vel nisl a sapien accumsan vehicula. Nunc nulla elit, dignissim et sem eget, porta cursus felis.</p>

        </div>
    );

}

export default ModalPage;
