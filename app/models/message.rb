class Message < ApplicationRecord
  belongs_to :user
  belongs_to :chat_room

  after_commit { MessageRelayJob.perform_later(self) }
end
