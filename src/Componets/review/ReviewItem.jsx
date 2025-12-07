import { Star } from "lucide-react";

function ReviewItem({
  review,
  onApprove,
  onReject,
  onDelete,
  onRestore,
  activeTab,
}) {
  return (
    <div className="bg-white rounded-xl sm:p-6 shadow-sm border border-gray-100 mb-4 p-4">
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <div className="flex gap-4 lg:w-56 flex-shrink-0">
          <img
            src={review.avatar}
            alt={review.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <p className="text-gray-500 text-sm mb-1">{review.reviewId}</p>
            <h3 className="font-bold text-gray-900 mb-1">{review.name}</h3>
            <p className="text-sm text-gray-500">
              {review.date} <span className="font-semibold">{review.time}</span>
            </p>
          </div>
        </div>

        {/* Middle - Review Content */}
        <div className="flex-1">
          <p className="text-gray-600 leading-relaxed">{review.review}</p>
        </div>

        {/* Right Side - Rating & Actions */}
        <div className="flex flex-col items-start lg:items-end gap-3 lg:w-64 flex-shrink-0">
          {/* Conditional Buttons based on Tab */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <div className="flex flex-col items-center">
              <span className="text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full mb-2">
                {review.status}
              </span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-bold text-gray-900">{review.rating}</span>
              </div>
            </div>

            <div className="flex flex-row ">
              {activeTab === "all" && (
                <>
                  <button
                    onClick={() => onApprove(review.id)}
                    className="h-10 flex-1 lg:flex-initial mr-2 px-6 py-2 border border-green-500 text-green-500 rounded-lg text-sm font-medium hover:bg-green-50 transition-colors"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => onReject(review.id)}
                    className="h-10 flex-1 lg:flex-initial px-6 py-2 border border-red-500 text-red-500 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors"
                  >
                    Reject
                  </button>
                </>
              )}

              {activeTab === "published" && (
                <button
                  onClick={() => onDelete(review.id)}
                  className="h-10 flex-1 lg:flex-initial px-6 py-2 border border-red-500 text-red-500 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors"
                >
                  Delete
                </button>
              )}

              {activeTab === "deleted" && (
                <button
                  onClick={() => onRestore(review.id)}
                  className="h-10 flex-1 lg:flex-initial px-6 py-2 border border-red-500 text-red-500 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors"
                >
                  Restore
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
